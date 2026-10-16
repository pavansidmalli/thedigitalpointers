import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { BlogCMSModal } from './components/BlogCMSModal';
import { LeadsDashboardModal } from './components/LeadsDashboardModal';
import { LegalModal } from './components/LegalModal';
import { StrategyGuideModal } from './components/StrategyGuideModal';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { FAQsPage } from './pages/FAQsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AdminPage } from './pages/AdminPage';
import { initialBlogPosts } from './data/blogData';
import { servicesData } from './data/servicesData';
import { seoRoutes } from './data/seoConfig';
import { ThemeProvider } from './context/ThemeContext';
import { BlogPost } from './types';

function AppContent() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [blogArticles, setBlogArticles] = useState<BlogPost[]>(initialBlogPosts);
  const [isBlogCMSOpen, setIsBlogCMSOpen] = useState(false);
  const [isLeadsConsoleOpen, setIsLeadsConsoleOpen] = useState(false);
  const [isStrategyGuideOpen, setIsStrategyGuideOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });

  // Fetch custom blog articles from backend on mount
  useEffect(() => {
    const fetchCustomArticles = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        if (data.articles && data.articles.length > 0) {
          setBlogArticles([...data.articles, ...initialBlogPosts]);
        }
      } catch (err) {
        console.error('Error fetching blog articles:', err);
      }
    };
    fetchCustomArticles();
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const handleArticleAdded = (newPost: BlogPost) => {
    setBlogArticles((prev) => [newPost, ...prev]);
    navigateTo(`/blog/${newPost.slug}/`);
  };

  // Normalize path string
  const cleanPath = currentPath.endsWith('/') && currentPath.length > 1
    ? currentPath.slice(0, -1)
    : currentPath;

  // Route Dispatcher
  let pageContent: React.ReactNode = null;
  let customTitle: string | undefined = undefined;
  let customDescription: string | undefined = undefined;
  let customMainKeyword: string | undefined = undefined;
  let customKeywords: string[] | undefined = undefined;
  let serviceSEOData: any = undefined;
  let articleSEOData: any = undefined;

  if (cleanPath === '' || cleanPath === '/') {
    pageContent = <HomePage onNavigate={navigateTo} />;
  } else if (cleanPath === '/about') {
    pageContent = <AboutPage onNavigate={navigateTo} />;
  } else if (cleanPath === '/services') {
    pageContent = <ServicesPage onNavigate={navigateTo} />;
  } else if (cleanPath.startsWith('/services/')) {
    const slug = cleanPath.replace('/services/', '').replace(/\/$/, '');
    const service = servicesData.find((s) => s.slug === slug);
    if (service) {
      const routeKey = `/services/${slug}/`;
      const routeConfig = seoRoutes[routeKey];
      customTitle = service.metaTitle || routeConfig?.title || `${service.title} Services Hyderabad | The Digital Pointers`;
      customDescription = service.metaDescription || routeConfig?.description || service.shortDescription;
      customMainKeyword = service.mainKeyword || routeConfig?.mainKeyword || `${service.title.toLowerCase()} services hyderabad`;
      customKeywords = service.keywords || routeConfig?.keywords;
      serviceSEOData = {
        title: service.title,
        description: customDescription,
        category: service.category,
        slug: service.slug,
        image: service.image,
        imageAlt: service.imageAlt,
        faqs: service.faqs,
        deliverables: service.deliverables,
        benefitsAndOutcomes: service.benefitsAndOutcomes
      };
      pageContent = (
        <ServiceDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
        />
      );
    } else {
      pageContent = <NotFoundPage onNavigate={navigateTo} />;
    }
  } else if (cleanPath === '/faqs') {
    pageContent = <FAQsPage onNavigate={navigateTo} />;
  } else if (cleanPath === '/blog') {
    pageContent = (
      <BlogPage
        articles={blogArticles}
        onNavigate={navigateTo}
      />
    );
  } else if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '').replace(/\/$/, '');
    const post = blogArticles.find((p) => p.slug === slug);
    if (post) {
      customTitle = `${post.title} — The Digital Pointers`;
      customMainKeyword = post.category.toLowerCase();
      articleSEOData = {
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedDate,
        authorName: post.author.name,
        category: post.category
      };
      pageContent = (
        <BlogPostPage
          post={post}
          allPosts={blogArticles}
          onNavigate={navigateTo}
        />
      );
    } else {
      pageContent = <NotFoundPage onNavigate={navigateTo} />;
    }
  } else if (cleanPath === '/case-studies' || cleanPath === '/portfolio') {
    pageContent = <CaseStudiesPage onNavigate={navigateTo} />;
  } else if (cleanPath === '/contact') {
    pageContent = (
      <ContactPage
        onNavigate={navigateTo}
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
      />
    );
  } else if (cleanPath.toLowerCase() === '/admin') {
    customTitle = 'Owner Admin Portal — The Digital Pointers';
    customDescription = 'Private agency owner console for inbound client leads & marketing funnel.';
    customMainKeyword = 'agency owner admin';
    pageContent = (
      <AdminPage
        onNavigate={navigateTo}
        onOpenCMS={() => setIsBlogCMSOpen(true)}
      />
    );
  } else if (cleanPath.toLowerCase() === '/leads') {
    // Redirect /leads to /admin
    pageContent = (
      <AdminPage
        onNavigate={navigateTo}
        onOpenCMS={() => setIsBlogCMSOpen(true)}
      />
    );
  } else {
    pageContent = <NotFoundPage onNavigate={navigateTo} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0C0C0E] text-[#111111] dark:text-[#F4F4F6] transition-colors duration-200">
      {/* Dynamic SEO Title, Meta, Canonical, and JSON-LD */}
      <SEOHead
        pathname={currentPath}
        customTitle={customTitle}
        customDescription={customDescription}
        customMainKeyword={customMainKeyword}
        customKeywords={customKeywords}
        serviceData={serviceSEOData}
        articleData={articleSEOData}
      />

      {/* Sticky Header with Navigation Dropdown, Theme Toggle, Strategy Guide CTA, and Leads Console */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenStrategyGuide={() => setIsStrategyGuideOpen(true)}
        onOpenLeadsConsole={() => setIsLeadsConsoleOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {pageContent}
      </main>

      {/* Fixed WhatsApp & Call Buttons in Bottom Corners */}
      <FloatingContactButtons />

      {/* Comprehensive Footer with Theme Toggle */}
      <Footer
        onNavigate={navigateTo}
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModalState({ isOpen: true, type: 'terms' })}
      />

      {/* Strategy Guide Lead Capture Modal */}
      <StrategyGuideModal
        isOpen={isStrategyGuideOpen}
        onClose={() => setIsStrategyGuideOpen(false)}
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
      />

      {/* Custom Blog CMS Modal */}
      <BlogCMSModal
        isOpen={isBlogCMSOpen}
        onClose={() => setIsBlogCMSOpen(false)}
        onArticleAdded={handleArticleAdded}
      />

      {/* Leads Console Modal */}
      <LeadsDashboardModal
        isOpen={isLeadsConsoleOpen}
        onClose={() => setIsLeadsConsoleOpen(false)}
      />

      {/* Privacy / Terms Legal Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState({ isOpen: false, type: 'privacy' })}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
