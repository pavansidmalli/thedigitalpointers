import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Mail,
  Key,
  Eye,
  EyeOff,
  LogOut,
  RefreshCw,
  Download,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Phone,
  Calendar,
  Building,
  DollarSign,
  FileText,
  UserCheck,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  SlidersHorizontal,
  Plus,
  BookOpen
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface AdminPageProps {
  onNavigate: (path: string) => void;
  onOpenCMS?: () => void;
}

const STORAGE_KEY = 'dp_owner_admin_token';
const OWNER_EMAIL = 'pavansid749@gmail.com';

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate, onOpenCMS }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string>('');
  const [authEmail, setAuthEmail] = useState<string>(OWNER_EMAIL);
  const [authPassword, setAuthPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  // Leads State
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState<boolean>(false);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);

  // Password Update Modal State
  const [isChangingPass, setIsChangingPass] = useState<boolean>(false);
  const [currentPass, setCurrentPass] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [passError, setPassError] = useState<string>('');
  const [passSuccess, setPassSuccess] = useState<string>('');
  const [isUpdatingPassLoading, setIsUpdatingPassLoading] = useState<boolean>(false);

  // On page load, verify if token exists
  useEffect(() => {
    const savedToken = localStorage.getItem(STORAGE_KEY);
    if (savedToken) {
      setAuthToken(savedToken);
      verifyToken(savedToken);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const verifyToken = async (token: string) => {
    setIsLoadingLeads(true);
    try {
      const res = await fetch('/api/admin/verify', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setIsAuthenticated(true);
        fetchLeads(token);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setAuthToken('');
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsAuthenticating(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: authEmail.trim(),
          password: authPassword.trim()
        })
      });

      const data = await res.json();

      if (res.ok && data.token) {
        setAuthToken(data.token);
        localStorage.setItem(STORAGE_KEY, data.token);
        setIsAuthenticated(true);
        setAuthPassword('');
        fetchLeads(data.token);
      } else {
        setAuthError(data.error || 'Authentication rejected. Only the authorized agency owner may enter.');
      }
    } catch {
      setAuthError('Connection error. Please try again.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = async () => {
    try {
      if (authToken) {
        await fetch('/api/admin/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${authToken}` }
        });
      }
    } catch {
      // ignore
    } finally {
      localStorage.removeItem(STORAGE_KEY);
      setAuthToken('');
      setIsAuthenticated(false);
      setLeads([]);
      setSelectedLead(null);
    }
  };

  const fetchLeads = async (token: string) => {
    setIsLoadingLeads(true);
    try {
      const res = await fetch('/api/leads', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401) {
        handleLogout();
        return;
      }
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (e) {
      console.error('Failed to fetch leads', e);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus as any } : l))
        );
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead((prev) => prev ? { ...prev, status: newStatus as any } : null);
        }
      }
    } catch (e) {
      console.error('Failed to update lead status', e);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassError('');
    setPassSuccess('');
    setIsUpdatingPassLoading(true);

    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
          currentPassword: currentPass.trim(),
          newPassword: newPass.trim()
        })
      });

      const data = await res.json();
      if (res.ok) {
        setPassSuccess('Passkey updated successfully! Keep this safe.');
        setCurrentPass('');
        setNewPass('');
        setTimeout(() => {
          setIsChangingPass(false);
          setPassSuccess('');
        }, 1800);
      } else {
        setPassError(data.error || 'Failed to update passkey.');
      }
    } catch {
      setPassError('Network error while updating passkey.');
    } finally {
      setIsUpdatingPassLoading(false);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = statusFilter === 'All' || l.status === statusFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      l.fullName.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.phone.toLowerCase().includes(q) ||
      (l.companyOrWebsite && l.companyOrWebsite.toLowerCase().includes(q)) ||
      l.service.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = [
      'Lead ID',
      'Full Name',
      'Email',
      'Phone',
      'Company/URL',
      'Service',
      'Monthly Budget',
      'Project Details',
      'Created At',
      'Status'
    ];
    const rows = filteredLeads.map((l) => [
      `"${l.id}"`,
      `"${l.fullName}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.companyOrWebsite || ''}"`,
      `"${l.service}"`,
      `"${l.monthlyBudget || ''}"`,
      `"${l.projectDetails.replace(/"/g, '""')}"`,
      `"${l.createdAt}"`,
      `"${l.status}"`
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `the_digital_pointers_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const countByStatus = (status: string) => {
    if (status === 'All') return leads.length;
    return leads.filter((l) => l.status === status).length;
  };

  return (
    <div className="min-h-screen bg-[#F7F7F8] dark:bg-[#09090B] text-[#111111] dark:text-[#F4F4F6] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-[#141417] p-5 sm:p-6 rounded-2xl border border-[#E8E8E8] dark:border-[#242429] shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#F06432]/10 flex items-center justify-center border border-[#F06432]/20">
              <ShieldCheck className="w-6 h-6 text-[#F06432]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-[#111111] dark:text-white">
                  Agency Admin Portal
                </h1>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  Private /admin
                </span>
              </div>
              <p className="text-xs text-[#707070] dark:text-neutral-400 mt-0.5">
                Restricted to agency owner ({OWNER_EMAIL}). Secure client leads & CRM database.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => onNavigate('/')}
              className="px-3.5 py-2 text-xs font-medium text-[#707070] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] hover:bg-[#F7F7F5] dark:hover:bg-[#1A1A1E] transition-colors"
            >
              Back to Public Site
            </button>

            {isAuthenticated && (
              <>
                {onOpenCMS && (
                  <button
                    onClick={onOpenCMS}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-[#F06432] hover:bg-[#d95526] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Launch Blog CMS</span>
                  </button>
                )}
                <button
                  onClick={() => setIsChangingPass(true)}
                  className="px-3.5 py-2 text-xs font-medium text-[#111111] dark:text-neutral-200 bg-[#F7F7F5] dark:bg-[#1E1E24] hover:bg-[#E8E8E8] dark:hover:bg-[#282830] rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] transition-colors flex items-center gap-1.5"
                >
                  <Key className="w-3.5 h-3.5 text-[#F06432]" />
                  <span>Passkey</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-3.5 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 rounded-lg border border-rose-200 dark:border-rose-900/50 transition-colors flex items-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Lock & Exit</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Not Authenticated: Secure Login Form */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto my-12 bg-white dark:bg-[#141417] p-8 rounded-2xl border border-[#E8E8E8] dark:border-[#242429] shadow-lg">
            <div className="text-center space-y-2 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#F06432]/10 border border-[#F06432]/20 flex items-center justify-center mx-auto text-[#F06432]">
                <Lock className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-bold text-[#111111] dark:text-white">
                Admin Authentication Required
              </h2>
              <p className="text-xs text-[#707070] dark:text-neutral-400">
                To protect confidential client information and contact details, access to this URL is strictly restricted to the verified agency owner.
              </p>
            </div>

            {authError && (
              <div className="mb-5 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#111111] dark:text-neutral-300 mb-1.5">
                  Authorized Owner Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#707070] dark:text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    required
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#D5D5D5] dark:border-[#2E2E36] bg-[#FAFAFA] dark:bg-[#19191D] text-xs font-medium text-[#111111] dark:text-white focus:outline-none focus:border-[#F06432] focus:ring-1 focus:ring-[#F06432]"
                    placeholder="pavansid749@gmail.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-[#111111] dark:text-neutral-300">
                    Master Passkey
                  </label>
                  <span className="text-[11px] text-[#707070] dark:text-neutral-500 font-mono">
                    Default: Pointer@2026
                  </span>
                </div>
                <div className="relative">
                  <Key className="w-4 h-4 text-[#707070] dark:text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    required
                    className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-[#D5D5D5] dark:border-[#2E2E36] bg-[#FAFAFA] dark:bg-[#19191D] text-xs font-mono text-[#111111] dark:text-white focus:outline-none focus:border-[#F06432] focus:ring-1 focus:ring-[#F06432]"
                    placeholder="Enter passkey..."
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#707070] dark:text-neutral-500 hover:text-[#111111] dark:hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isAuthenticating}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F06432] hover:bg-[#d95526] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                {isAuthenticating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Unlock Admin Console</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-[#E8E8E8] dark:border-[#242429] text-center">
              <p className="text-[11px] text-[#707070] dark:text-neutral-500 leading-relaxed">
                Notice: All access attempts are recorded. Client telephone numbers, budgets, and project notes are guarded by server-side authorization tokens.
              </p>
            </div>
          </div>
        ) : (
          /* Authenticated: Leads & Marketing Funnel Dashboard */
          <div className="space-y-6">

            {/* Admin CMS & Editorial Trigger Card */}
            {onOpenCMS && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#F06432]/10 via-[#F7F7F5] dark:via-[#19191E] to-transparent border border-[#F06432]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F06432] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111111] dark:text-white flex items-center gap-2">
                      <span>Agency Editorial & Blog Publishing CMS</span>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
                        Admin Only
                      </span>
                    </div>
                    <p className="text-xs text-[#707070] dark:text-neutral-400 mt-0.5">
                      Only authorized admins can publish new strategic insights and field guides to the live website.
                    </p>
                  </div>
                </div>
                <button
                  onClick={onOpenCMS}
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#F06432] dark:hover:bg-[#F06432] dark:hover:text-white rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0 shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Launch CMS / Publish Blog</span>
                </button>
              </div>
            )}

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#242429]">
                <span className="text-xs text-[#707070] dark:text-neutral-400 font-medium">Total Inbound Leads</span>
                <p className="text-2xl font-bold text-[#111111] dark:text-white mt-1">{leads.length}</p>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Forms & Strategy Downloads</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#242429]">
                <span className="text-xs text-[#707070] dark:text-neutral-400 font-medium">New / Uncontacted</span>
                <p className="text-2xl font-bold text-amber-500 mt-1">{countByStatus('New')}</p>
                <span className="text-[11px] text-amber-600/80 dark:text-amber-400/80 font-medium">Pending initial outreach</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#242429]">
                <span className="text-xs text-[#707070] dark:text-neutral-400 font-medium">Contacted & Active</span>
                <p className="text-2xl font-bold text-blue-500 mt-1">{countByStatus('Contacted')}</p>
                <span className="text-[11px] text-blue-500/80 font-medium">Under discussion</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#242429]">
                <span className="text-xs text-[#707070] dark:text-neutral-400 font-medium">Closed / Won</span>
                <p className="text-2xl font-bold text-emerald-500 mt-1">{countByStatus('Closed')}</p>
                <span className="text-[11px] text-emerald-600/80 font-medium">Converted into clients</span>
              </div>
            </div>

            {/* Filter and Action Bar */}
            <div className="bg-white dark:bg-[#141417] p-4 rounded-2xl border border-[#E8E8E8] dark:border-[#242429] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#707070] dark:text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, email, phone, company, or service..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-[#FAFAFA] dark:bg-[#19191D] border border-[#D5D5D5] dark:border-[#2E2E36] text-[#111111] dark:text-white focus:outline-none focus:border-[#F06432]"
                />
              </div>

              {/* Status Pill Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {['All', 'New', 'Contacted', 'Qualified', 'Closed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      statusFilter === status
                        ? 'bg-[#F06432] text-white shadow-sm'
                        : 'bg-[#F7F7F5] dark:bg-[#1A1A1E] text-[#707070] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white border border-[#E8E8E8] dark:border-[#2C2C32]'
                    }`}
                  >
                    {status} ({countByStatus(status)})
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-end md:self-auto">
                <button
                  onClick={() => fetchLeads(authToken)}
                  disabled={isLoadingLeads}
                  className="p-2 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] hover:bg-[#F7F7F5] dark:hover:bg-[#1E1E24] text-[#707070] dark:text-neutral-400 transition-colors"
                  title="Refresh leads from server"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoadingLeads ? 'animate-spin text-[#F06432]' : ''}`} />
                </button>
                <button
                  onClick={handleExportCSV}
                  disabled={filteredLeads.length === 0}
                  className="px-3 py-2 rounded-lg bg-[#F7F7F5] dark:bg-[#1E1E24] hover:bg-[#E8E8E8] dark:hover:bg-[#282830] border border-[#E8E8E8] dark:border-[#2C2C32] text-xs font-semibold text-[#111111] dark:text-white flex items-center gap-1.5 transition-colors disabled:opacity-40"
                >
                  <Download className="w-3.5 h-3.5 text-[#F06432]" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Leads Table & Detail View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Table / List */}
              <div className={`lg:col-span-2 bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#242429] overflow-hidden`}>
                <div className="p-4 border-b border-[#E8E8E8] dark:border-[#242429] flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#707070] dark:text-neutral-400">
                    Lead Records ({filteredLeads.length})
                  </h3>
                  <span className="text-[11px] text-[#707070] dark:text-neutral-500">
                    Click any entry to view full submission
                  </span>
                </div>

                {isLoadingLeads ? (
                  <div className="p-12 text-center text-xs text-[#707070] dark:text-neutral-400 space-y-2">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#F06432]" />
                    <p>Loading encrypted lead records...</p>
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="p-12 text-center space-y-2">
                    <FileText className="w-8 h-8 mx-auto text-[#707070]/40 dark:text-neutral-600" />
                    <p className="text-sm font-semibold text-[#111111] dark:text-white">No inquiries found</p>
                    <p className="text-xs text-[#707070] dark:text-neutral-500">
                      Inbound contact forms or strategy guide downloads will appear here in real-time.
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-[#E8E8E8] dark:divide-[#242429] max-h-[600px] overflow-y-auto">
                    {filteredLeads.map((lead) => {
                      const isSelected = selectedLead?.id === lead.id;
                      return (
                        <div
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className={`p-4 transition-colors cursor-pointer hover:bg-[#F9F9FB] dark:hover:bg-[#1A1A1F] ${
                            isSelected ? 'bg-[#F06432]/5 dark:bg-[#F06432]/10 border-l-4 border-l-[#F06432]' : ''
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-[#111111] dark:text-white truncate">
                                  {lead.fullName}
                                </span>
                                <span className="text-[10px] font-mono text-[#707070] dark:text-neutral-500 bg-[#F2F2F2] dark:bg-[#1E1E24] px-1.5 py-0.5 rounded">
                                  {lead.id}
                                </span>
                              </div>
                              <div className="text-xs text-[#707070] dark:text-neutral-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                                <span className="flex items-center gap-1 truncate">
                                  <Mail className="w-3 h-3 text-[#F06432]" />
                                  {lead.email}
                                </span>
                                {lead.phone && (
                                  <span className="flex items-center gap-1 truncate">
                                    <Phone className="w-3 h-3 text-neutral-400" />
                                    {lead.phone}
                                  </span>
                                )}
                              </div>
                              <div className="pt-1 flex items-center gap-2 text-[11px] text-[#707070] dark:text-neutral-400">
                                <span className="px-2 py-0.5 rounded bg-[#F4F4F6] dark:bg-[#1E1E24] font-medium text-[#111111] dark:text-neutral-300">
                                  {lead.service}
                                </span>
                                {lead.monthlyBudget && (
                                  <span className="font-mono text-[#F06432] text-[10px]">
                                    {lead.monthlyBudget}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="text-right flex flex-col items-end gap-2 shrink-0">
                              <select
                                value={lead.status}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => handleStatusUpdate(lead.id, e.target.value)}
                                className={`text-[11px] font-semibold rounded-lg px-2 py-1 border transition-colors ${
                                  lead.status === 'New'
                                    ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900/60'
                                    : lead.status === 'Contacted'
                                    ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900/60'
                                    : lead.status === 'Qualified'
                                    ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900/60'
                                    : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60'
                                }`}
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Qualified">Qualified</option>
                                <option value="Closed">Closed</option>
                              </select>
                              <span className="text-[10px] text-[#707070] dark:text-neutral-500">
                                {new Date(lead.createdAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Lead Details Inspector */}
              <div className="bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#242429] p-5 h-fit">
                {selectedLead ? (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] dark:border-[#242429]">
                      <div>
                        <h3 className="text-base font-bold text-[#111111] dark:text-white">
                          {selectedLead.fullName}
                        </h3>
                        <span className="text-xs font-mono text-[#F06432]">
                          {selectedLead.id}
                        </span>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-[#F06432]/10 text-[#F06432]">
                        {selectedLead.status}
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-xl bg-[#FAFAFA] dark:bg-[#19191D] space-y-1.5 border border-[#E8E8E8] dark:border-[#242429]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070] dark:text-neutral-500">
                          Direct Contact
                        </span>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-[#F06432]" />
                          <a
                            href={`mailto:${selectedLead.email}`}
                            className="font-medium text-[#111111] dark:text-white hover:underline truncate"
                          >
                            {selectedLead.email}
                          </a>
                        </div>
                        {selectedLead.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-neutral-400" />
                            <a
                              href={`tel:${selectedLead.phone}`}
                              className="font-medium text-[#111111] dark:text-white hover:underline"
                            >
                              {selectedLead.phone}
                            </a>
                          </div>
                        )}
                      </div>

                      {selectedLead.companyOrWebsite && (
                        <div className="p-3 rounded-xl bg-[#FAFAFA] dark:bg-[#19191D] space-y-1 border border-[#E8E8E8] dark:border-[#242429]">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070] dark:text-neutral-500">
                            Company / URL
                          </span>
                          <p className="font-medium text-[#111111] dark:text-white">
                            {selectedLead.companyOrWebsite}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-xl bg-[#FAFAFA] dark:bg-[#19191D] space-y-1 border border-[#E8E8E8] dark:border-[#242429]">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070] dark:text-neutral-500">
                            Requested Service
                          </span>
                          <p className="font-semibold text-[#111111] dark:text-white">
                            {selectedLead.service}
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-[#FAFAFA] dark:bg-[#19191D] space-y-1 border border-[#E8E8E8] dark:border-[#242429]">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070] dark:text-neutral-500">
                            Monthly Budget
                          </span>
                          <p className="font-semibold text-[#F06432] font-mono">
                            {selectedLead.monthlyBudget || 'Not specified'}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FAFAFA] dark:bg-[#19191D] space-y-1.5 border border-[#E8E8E8] dark:border-[#242429]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070] dark:text-neutral-500">
                          Project Details / Brief
                        </span>
                        <p className="text-xs leading-relaxed text-[#111111] dark:text-neutral-200 whitespace-pre-wrap">
                          {selectedLead.projectDetails}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <a
                          href={`mailto:${selectedLead.email}?subject=RE: Your inquiry with The Digital Pointers (${selectedLead.service})`}
                          className="flex-1 py-2 px-3 rounded-xl bg-[#F06432] hover:bg-[#d95526] text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Reply via Email</span>
                        </a>
                        {selectedLead.phone && (
                          <a
                            href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1"
                          >
                            WhatsApp
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-[#707070] dark:text-neutral-500 space-y-2">
                    <UserCheck className="w-8 h-8 mx-auto text-[#707070]/40" />
                    <p className="text-xs font-medium">Select a lead to inspect details</p>
                    <p className="text-[11px]">Direct email response links and complete project briefs will appear here.</p>
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Password Change Dialog */}
      {isChangingPass && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#141417] max-w-sm w-full rounded-2xl border border-[#E8E8E8] dark:border-[#242429] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#111111] dark:text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-[#F06432]" />
                <span>Update Master Passkey</span>
              </h3>
              <button
                onClick={() => setIsChangingPass(false)}
                className="text-[#707070] hover:text-[#111111] dark:hover:text-white text-xs"
              >
                Cancel
              </button>
            </div>

            {passError && (
              <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300">
                {passError}
              </div>
            )}
            {passSuccess && (
              <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-700 dark:text-emerald-300">
                {passSuccess}
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#707070] dark:text-neutral-400 mb-1">
                  Current Passkey
                </label>
                <input
                  type="password"
                  value={currentPass}
                  onChange={(e) => setCurrentPass(e.target.value)}
                  required
                  placeholder="Enter current passkey"
                  className="w-full px-3 py-2 rounded-xl text-xs bg-[#FAFAFA] dark:bg-[#19191D] border border-[#D5D5D5] dark:border-[#2E2E36] text-[#111111] dark:text-white focus:outline-none focus:border-[#F06432]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#707070] dark:text-neutral-400 mb-1">
                  New Passkey (min 6 characters)
                </label>
                <input
                  type="password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  required
                  placeholder="Create new secret passkey"
                  className="w-full px-3 py-2 rounded-xl text-xs bg-[#FAFAFA] dark:bg-[#19191D] border border-[#D5D5D5] dark:border-[#2E2E36] text-[#111111] dark:text-white focus:outline-none focus:border-[#F06432]"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsChangingPass(false)}
                  className="w-1/2 py-2 rounded-xl border border-[#E8E8E8] dark:border-[#2C2C32] text-xs font-medium text-[#707070] dark:text-neutral-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdatingPassLoading}
                  className="w-1/2 py-2 rounded-xl bg-[#F06432] hover:bg-[#d95526] text-white text-xs font-semibold disabled:opacity-50"
                >
                  {isUpdatingPassLoading ? 'Updating...' : 'Save Passkey'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
