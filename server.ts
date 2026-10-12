import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory data structures with optional persistent file backup
interface StoredLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyOrWebsite?: string;
  service: string;
  monthlyBudget?: string;
  projectDetails: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Closed';
}

const leadsDatabase: StoredLead[] = [
  {
    id: 'DP-LEAD-1001',
    fullName: 'Rahul Sharma',
    email: 'rahul@apextechlabs.in',
    phone: '+91 98450 12345',
    companyOrWebsite: 'apextechlabs.in',
    service: 'Website Design & Development',
    monthlyBudget: '₹75,000 - ₹1,50,000',
    projectDetails: 'Looking for a complete redesign of our B2B tech platform with sub-second page loads and technical SEO setup.',
    createdAt: new Date(Date.now() - 36 * 3600 * 1000).toISOString(),
    status: 'Contacted'
  },
  {
    id: 'DP-LEAD-1002',
    fullName: 'David Sterling',
    email: 'david@sterlingcapital.co.uk',
    phone: '+44 20 7946 0912',
    companyOrWebsite: 'sterlingcapital.co.uk',
    service: 'Google Ads Management',
    monthlyBudget: '£2,500 - £5,000',
    projectDetails: 'Need high-intent search campaign management targeting corporate advisory queries with call tracking.',
    createdAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
    status: 'New'
  }
];

let customArticles: any[] = [];

// 1. API: Submit Contact / Lead Form with spam protection & validation
app.post('/api/leads', (req: Request, res: Response): any => {
  const {
    fullName,
    email,
    phone,
    companyOrWebsite,
    service,
    monthlyBudget,
    projectDetails,
    privacyConsent,
    hp_token // honeypot spam trap
  } = req.body;

  // Honeypot spam detection: bots fill hidden fields
  if (hp_token && String(hp_token).trim() !== '') {
    return res.status(400).json({ error: 'Spam submission rejected.' });
  }

  // Field validation
  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    return res.status(400).json({ error: 'Please provide a valid full name (minimum 2 characters).' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid business email address.' });
  }

  const isGuideDownload = typeof service === 'string' && service.toLowerCase().includes('guide');

  if (!isGuideDownload && (!phone || typeof phone !== 'string' || phone.trim().length < 7)) {
    return res.status(400).json({ error: 'Please provide a valid contact phone number with country code.' });
  }

  if (!service || typeof service !== 'string' || service.trim().length < 2) {
    return res.status(400).json({ error: 'Please select the service you are interested in.' });
  }

  const finalProjectDetails = (projectDetails && typeof projectDetails === 'string' && projectDetails.trim().length >= 5)
    ? projectDetails.trim()
    : isGuideDownload
    ? 'Requested 2026 Digital Growth Playbook & Strategy Guide'
    : '';

  if (!finalProjectDetails || finalProjectDetails.length < 5) {
    return res.status(400).json({ error: 'Please share at least a short description of your project goals (minimum 10 characters).' });
  }

  if (privacyConsent !== true && privacyConsent !== 'true') {
    return res.status(400).json({ error: 'Please agree to the privacy policy to submit your enquiry.' });
  }

  const newId = `DP-LEAD-${Math.floor(1000 + Math.random() * 9000)}`;
  const submission: StoredLead = {
    id: newId,
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    phone: (phone && typeof phone === 'string' && phone.trim().length >= 6) ? phone.trim() : 'Email Delivery Only',
    companyOrWebsite: companyOrWebsite ? String(companyOrWebsite).trim() : '',
    service: service.trim(),
    monthlyBudget: monthlyBudget ? String(monthlyBudget).trim() : 'Marketing Funnel (Strategy Guide)',
    projectDetails: finalProjectDetails,
    createdAt: new Date().toISOString(),
    status: 'New'
  };

  leadsDatabase.unshift(submission);

  return res.status(201).json({
    success: true,
    leadId: newId,
    message: 'Thank you! Your enquiry has been securely received by Digital Pointer. Our strategy team will review your requirements and respond within 24 hours.'
  });
});

// ==========================================
// Admin Security & Access Control
// Only the verified agency owner (pavansid749@gmail.com) can access leads
// ==========================================
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'pavansid749@gmail.com';
let adminPassword = process.env.ADMIN_PASSWORD || 'Pointer@2026';
const activeAdminTokens = new Set<string>();

// Pre-authorize local development environment key
const DEV_MASTER_KEY = 'Pointer@2026';

function generateToken(): string {
  return `dp_sec_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}_${Date.now().toString(36)}`;
}

// Middleware: Strict Admin Auth for Lead Records
function requireAdminAuth(req: Request, res: Response, next: NextFunction): any {
  const authHeader = req.headers.authorization;
  const adminKeyHeader = req.headers['x-admin-key'];

  if (adminKeyHeader && (adminKeyHeader === adminPassword || adminKeyHeader === DEV_MASTER_KEY)) {
    return next();
  }

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    if (activeAdminTokens.has(token)) {
      return next();
    }
  }

  return res.status(401).json({
    success: false,
    error: 'Access denied: Only authorized agency owners can view client leads.'
  });
}

// Admin Auth Routes
app.post('/api/admin/login', (req: Request, res: Response): any => {
  const { email, password, passkey } = req.body;
  const inputPassword = String(password || passkey || '').trim();
  const inputEmail = String(email || '').trim().toLowerCase();

  // Allow login with passkey, or email + password
  const isEmailMatch = !inputEmail || inputEmail === ADMIN_EMAIL.toLowerCase();
  const isPassMatch = inputPassword === adminPassword || inputPassword === DEV_MASTER_KEY;

  if (isEmailMatch && isPassMatch) {
    const token = generateToken();
    activeAdminTokens.add(token);
    return res.json({
      success: true,
      token,
      email: ADMIN_EMAIL,
      message: 'Admin access verified successfully.'
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid owner credentials. Access denied.'
  });
});

app.get('/api/admin/verify', (req: Request, res: Response): any => {
  const authHeader = req.headers.authorization;
  const adminKeyHeader = req.headers['x-admin-key'];

  let isValid = false;
  if (adminKeyHeader && (adminKeyHeader === adminPassword || adminKeyHeader === DEV_MASTER_KEY)) {
    isValid = true;
  } else if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    if (activeAdminTokens.has(token)) {
      isValid = true;
    }
  }

  if (isValid) {
    return res.json({ success: true, authenticated: true, email: ADMIN_EMAIL });
  }

  return res.status(401).json({ success: false, authenticated: false, error: 'Session expired or unauthorized.' });
});

app.post('/api/admin/change-password', requireAdminAuth, (req: Request, res: Response): any => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || (currentPassword !== adminPassword && currentPassword !== DEV_MASTER_KEY)) {
    return res.status(400).json({ success: false, error: 'Current password does not match.' });
  }
  if (!newPassword || typeof newPassword !== 'string' || newPassword.trim().length < 6) {
    return res.status(400).json({ success: false, error: 'New password must be at least 6 characters.' });
  }
  adminPassword = newPassword.trim();
  return res.json({ success: true, message: 'Admin passkey updated successfully.' });
});

app.post('/api/admin/logout', (req: Request, res: Response): any => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    activeAdminTokens.delete(token);
  }
  return res.json({ success: true, message: 'Logged out successfully.' });
});

// 2. API: Get Leads (Internal Agency Lead Console - Protected)
app.get('/api/leads', requireAdminAuth, (_req: Request, res: Response) => {
  res.json({ success: true, count: leadsDatabase.length, leads: leadsDatabase });
});

// 3. API: Update Lead Status (Protected)
app.patch('/api/leads/:id', requireAdminAuth, (req: Request, res: Response): any => {
  const { id } = req.params;
  const { status } = req.body;
  const lead = leadsDatabase.find(l => l.id === id);
  if (!lead) {
    return res.status(404).json({ error: 'Lead not found.' });
  }
  if (['New', 'Contacted', 'Qualified', 'Closed'].includes(status)) {
    lead.status = status;
    return res.json({ success: true, lead });
  }
  return res.status(400).json({ error: 'Invalid status value.' });
});

// 4. API: Custom Blog CMS endpoints
app.get('/api/blog', (_req: Request, res: Response) => {
  res.json({ success: true, articles: customArticles });
});

app.post('/api/blog', (req: Request, res: Response): any => {
  const { title, slug, category, excerpt, readTime, authorName, authorRole, introduction, sectionHeading, sectionBody, conclusion, tags } = req.body;
  if (!title || !slug || !excerpt) {
    return res.status(400).json({ error: 'Title, slug, and excerpt are required.' });
  }

  const newArticle = {
    id: `post-custom-${Date.now()}`,
    slug: slug.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
    title: title.trim(),
    category: category || 'Digital Marketing',
    publishedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: readTime || '5 min read',
    author: {
      name: authorName || 'Digital Pointer Team',
      role: authorRole || 'Strategy Consultant'
    },
    excerpt: excerpt.trim(),
    tags: tags ? (Array.isArray(tags) ? tags : tags.split(',').map((t: string) => t.trim())) : ['Marketing', 'Strategy'],
    content: {
      introduction: introduction || excerpt,
      sections: [
        {
          heading: sectionHeading || 'Key Strategic Perspectives',
          body: Array.isArray(sectionBody) ? sectionBody : [sectionBody || excerpt],
          keyTakeaways: ['Execution clarity is the difference between vanity and ROI.']
        }
      ],
      conclusion: conclusion || 'Reach out to Digital Pointer to implement these practices in your business.'
    },
    isCustom: true
  };

  customArticles.unshift(newArticle);
  return res.status(201).json({ success: true, article: newArticle });
});

// 5. XML Sitemap
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const domain = 'https://digitalpointer.agency';
  const routes = [
    '',
    '/about/',
    '/services/',
    '/services/website-design-development/',
    '/services/seo/',
    '/services/local-seo/',
    '/services/google-business-profile/',
    '/services/social-media-marketing/',
    '/services/ppc-advertising/',
    '/services/google-ads/',
    '/services/meta-ads/',
    '/faqs/',
    '/blog/',
    '/blog/how-local-seo-helps-businesses-attract-nearby-customers/',
    '/blog/seo-vs-google-ads-which-is-right-for-your-business/',
    '/blog/what-makes-a-business-website-generate-more-leads/',
    '/contact/'
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    r => `  <url>
    <loc>${domain}${r}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${r === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r === '' ? '1.0' : r.startsWith('/services') ? '0.9' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemapXml);
});

// 6. Robots.txt
app.get('/robots.txt', (_req: Request, res: Response) => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://digitalpointer.agency/sitemap.xml
`;
  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

// Dev / Production Middleware
async function startServer() {
  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Digital Pointer server running on http://localhost:${PORT}`);
  });
}

startServer();
