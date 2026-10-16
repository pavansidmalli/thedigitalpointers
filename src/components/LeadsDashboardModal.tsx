import React, { useState, useEffect } from 'react';
import {
  X,
  RefreshCw,
  Download,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  UserCheck,
  Lock,
  Key,
  LogOut,
  ShieldAlert,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Search,
  Settings
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface LeadsDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY = 'dp_owner_admin_token';
const OWNER_EMAIL = 'pavansid749@gmail.com';

export const LeadsDashboardModal: React.FC<LeadsDashboardModalProps> = ({ isOpen, onClose }) => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string>('');
  const [authEmail, setAuthEmail] = useState<string>(OWNER_EMAIL);
  const [authPassword, setAuthPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  // Leads state
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Password change state
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState<boolean>(false);
  const [currentPassInput, setCurrentPassInput] = useState<string>('');
  const [newPassInput, setNewPassInput] = useState<string>('');
  const [changePassError, setChangePassError] = useState<string>('');
  const [changePassSuccess, setChangePassSuccess] = useState<string>('');
  const [isChangingPass, setIsChangingPass] = useState<boolean>(false);

  // Check existing session token on mount/open
  useEffect(() => {
    if (!isOpen) return;

    const savedToken = localStorage.getItem(STORAGE_KEY);
    if (savedToken) {
      setAuthToken(savedToken);
      verifySession(savedToken);
    } else {
      setIsAuthenticated(false);
    }
  }, [isOpen]);

  const verifySession = async (token: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/verify', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setIsAuthenticated(true);
        fetchLeadsWithToken(token);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setAuthToken('');
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
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
        fetchLeadsWithToken(data.token);
      } else {
        setAuthError(data.error || 'Authentication failed. Please verify your credentials.');
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
      setAuthPassword('');
    }
  };

  const fetchLeadsWithToken = async (token: string) => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
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
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setChangePassError('');
    setChangePassSuccess('');
    setIsChangingPass(true);

    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
          currentPassword: currentPassInput.trim(),
          newPassword: newPassInput.trim()
        })
      });

      const data = await res.json();
      if (res.ok) {
        setChangePassSuccess('Passkey updated successfully! Keep this safe.');
        setCurrentPassInput('');
        setNewPassInput('');
        setTimeout(() => {
          setShowPasswordChangeModal(false);
          setChangePassSuccess('');
        }, 2000);
      } else {
        setChangePassError(data.error || 'Failed to update passkey.');
      }
    } catch {
      setChangePassError('Network error while updating passkey.');
    } finally {
      setIsChangingPass(false);
    }
  };

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
    link.setAttribute(
      'download',
      `the_digital_pointers_leads_${new Date().toISOString().split('T')[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  // Filter leads based on status and search query
  const filteredLeads = leads
    .filter((l) => (selectedStatus === 'All' ? true : l.status === selectedStatus))
    .filter((l) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        l.fullName.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.phone.toLowerCase().includes(q) ||
        l.service.toLowerCase().includes(q) ||
        (l.companyOrWebsite && l.companyOrWebsite.toLowerCase().includes(q))
      );
    });

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-[#141417] rounded-2xl max-w-4xl w-full border border-[#E8E8E8] dark:border-[#26262B] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between bg-[#F7F7F5] dark:bg-[#18181C]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F06432]/10 dark:bg-[#F06432]/20 border border-[#F06432]/20 flex items-center justify-center text-[#F06432]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-base text-[#111111] dark:text-white">
                  Owner Leads & Inquiries Console
                </h3>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Protected
                </span>
              </div>
              <p className="text-xs text-[#707070] dark:text-[#A1A1AA]">
                Private access restricted to account: <span className="font-mono text-[#111111] dark:text-white font-medium">{OWNER_EMAIL}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white hover:bg-[#E8E8E8] dark:hover:bg-[#25252B] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close Leads Console"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        {!isAuthenticated ? (
          /* ==================================================== */
          /* LOCKED STATE: OWNER AUTHENTICATION GATE              */
          /* ==================================================== */
          <div className="p-6 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <h4 className="font-heading font-bold text-xl text-[#111111] dark:text-white">
              Owner Authentication Required
            </h4>
            <p className="text-sm text-[#707070] dark:text-[#A1A1AA] max-w-md mt-1.5 leading-relaxed">
              This area contains sensitive client data, contact phone numbers, and project budgets. Please enter your agency owner passkey to unlock your leads.
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-md mt-6 space-y-4 text-left">
              {authError && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#111111] dark:text-[#E4E4E7] mb-1.5">
                  Authorized Owner Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1A1A1E] text-sm text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F06432]"
                  />
                  <div className="absolute right-3 top-2.5 text-xs text-neutral-400 font-mono">
                    Owner
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111111] dark:text-[#E4E4E7] mb-1.5">
                  Admin Passkey
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    placeholder="Enter owner passkey"
                    required
                    autoFocus
                    className="w-full px-3.5 py-2.5 pr-10 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1A1A1E] text-sm text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F06432]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-2.5 p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  className="w-full py-3 rounded-xl bg-[#F06432] hover:bg-[#d95526] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm min-h-[46px] disabled:opacity-60"
                >
                  {isAuthenticating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying Passkey...</span>
                    </>
                  ) : (
                    <>
                      <Key className="w-4 h-4" />
                      <span>Unlock My Leads</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 rounded-lg bg-[#F7F7F5] dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#26262B] text-xs text-[#707070] dark:text-[#A1A1AA] flex items-center justify-between">
                <span>Default Passkey: <code className="font-mono font-bold text-[#111111] dark:text-white">Pointer@2026</code></span>
                <span className="text-[11px] text-[#F06432]">Customizable</span>
              </div>
            </form>
          </div>
        ) : (
          /* ==================================================== */
          /* UNLOCKED STATE: AUTHENTICATED LEADS DASHBOARD        */
          /* ==================================================== */
          <>
            {/* Action Bar */}
            <div className="px-5 sm:px-6 py-3 border-b border-[#E8E8E8] dark:border-[#26262B] bg-[#FAFAFA] dark:bg-[#16161A] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Authenticated as Owner</span>
                </span>
                <button
                  onClick={() => setShowPasswordChangeModal(true)}
                  className="px-2.5 py-1 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1F1F24] text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white transition-colors flex items-center gap-1 font-medium"
                  title="Change your admin passkey"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Change Passkey</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => fetchLeadsWithToken(authToken)}
                  disabled={isLoading}
                  className="p-2 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1A1A1E] text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white transition-colors min-h-[36px]"
                  title="Refresh Leads"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={handleExportCSV}
                  disabled={filteredLeads.length === 0}
                  className="px-3 py-1.5 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1A1A1E] text-xs font-semibold text-[#111111] dark:text-white hover:bg-[#F7F7F5] dark:hover:bg-[#25252B] transition-colors flex items-center gap-1.5 min-h-[36px] disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5 text-[#F06432]" />
                  <span>Export CSV ({filteredLeads.length})</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 font-semibold transition-colors flex items-center gap-1.5 min-h-[36px]"
                  title="Log out and lock leads dashboard"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Lock & Exit</span>
                </button>
              </div>
            </div>

            {/* Change Password Inline Form */}
            {showPasswordChangeModal && (
              <div className="p-4 bg-amber-500/5 dark:bg-amber-500/10 border-b border-[#E8E8E8] dark:border-[#26262B]">
                <form onSubmit={handleChangePassword} className="max-w-xl mx-auto space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-white flex items-center gap-1.5">
                      <Key className="w-3.5 h-3.5 text-[#F06432]" />
                      <span>Change Owner Passkey</span>
                    </h5>
                    <button
                      type="button"
                      onClick={() => setShowPasswordChangeModal(false)}
                      className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                    >
                      Cancel
                    </button>
                  </div>

                  {changePassError && (
                    <div className="p-2.5 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 text-xs">
                      {changePassError}
                    </div>
                  )}
                  {changePassSuccess && (
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs">
                      {changePassSuccess}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="block text-neutral-500 mb-1">Current Passkey</label>
                      <input
                        type="password"
                        value={currentPassInput}
                        onChange={(e) => setCurrentPassInput(e.target.value)}
                        placeholder="Current passkey"
                        required
                        className="w-full px-3 py-1.5 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#141417] text-xs text-[#111111] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1">New Secret Passkey</label>
                      <input
                        type="password"
                        value={newPassInput}
                        onChange={(e) => setNewPassInput(e.target.value)}
                        placeholder="Min 6 characters"
                        required
                        className="w-full px-3 py-1.5 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#141417] text-xs text-[#111111] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      disabled={isChangingPass}
                      className="px-4 py-1.5 rounded-lg bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      {isChangingPass ? 'Saving...' : 'Update Passkey'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Filter and Search Bar */}
            <div className="px-5 sm:px-6 py-3 border-b border-[#E8E8E8] dark:border-[#26262B] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-[#141417] text-xs">
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[#707070] dark:text-[#A1A1AA] mr-1.5 whitespace-nowrap">Filter:</span>
                {['All', 'New', 'Contacted', 'Qualified', 'Closed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors whitespace-nowrap ${
                      selectedStatus === status
                        ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111]'
                        : 'text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[200px]">
                <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, phone, service..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1A1A1E] text-xs text-[#111111] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#F06432]"
                />
              </div>
            </div>

            {/* Leads List */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {filteredLeads.length === 0 ? (
                <div className="text-center py-12 text-[#707070] dark:text-[#A1A1AA]">
                  <p className="text-sm font-medium">No leads match this filter.</p>
                  <p className="text-xs mt-1">Inbound consultations and strategy downloads will appear here in real time.</p>
                </div>
              ) : (
                filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-5 rounded-xl border border-[#E8E8E8] dark:border-[#26262B] bg-[#F7F7F5] dark:bg-[#1A1A1E] space-y-3 shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#F06432]">{lead.id}</span>
                          <span aria-hidden="true" className="text-[#707070] dark:text-[#A1A1AA]">·</span>
                          <h4 className="font-heading font-bold text-base text-[#111111] dark:text-white">
                            {lead.fullName}
                          </h4>
                          {lead.companyOrWebsite && (
                            <span className="text-xs text-[#707070] dark:text-[#A1A1AA]">
                              ({lead.companyOrWebsite})
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#707070] dark:text-[#A1A1AA] mt-1.5">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-[#111111] dark:text-white" />
                            <a
                              href={`mailto:${lead.email}`}
                              className="hover:underline text-[#111111] dark:text-white font-medium"
                            >
                              {lead.email}
                            </a>
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-[#111111] dark:text-white" />
                            <a
                              href={`tel:${lead.phone}`}
                              className="hover:underline text-[#111111] dark:text-white font-medium"
                            >
                              {lead.phone}
                            </a>
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                          </span>
                        </div>
                      </div>

                      {/* Status Dropdown */}
                      <div className="flex items-center gap-2">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#222228] text-[#111111] dark:text-white focus:ring-1 focus:ring-[#F06432] focus:outline-none"
                        >
                          <option value="New">Status: New</option>
                          <option value="Contacted">Status: Contacted</option>
                          <option value="Qualified">Status: Qualified</option>
                          <option value="Closed">Status: Closed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-white dark:bg-[#151518] p-3 rounded-lg border border-[#E8E8E8] dark:border-[#26262B]">
                      <div>
                        <span className="text-[#707070] dark:text-[#A1A1AA]">Requested Service / Funnel:</span>{' '}
                        <span className="font-semibold text-[#111111] dark:text-white">{lead.service}</span>
                      </div>
                      <div>
                        <span className="text-[#707070] dark:text-[#A1A1AA]">Monthly Budget:</span>{' '}
                        <span className="font-semibold text-[#111111] dark:text-white">
                          {lead.monthlyBudget || 'Undisclosed'}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-[#111111] dark:text-white bg-white dark:bg-[#151518] p-3 rounded-lg border border-[#E8E8E8] dark:border-[#26262B]">
                      <span className="font-semibold text-[#707070] dark:text-[#A1A1AA] block mb-1">
                        Project Requirements / Notes:
                      </span>
                      <p className="leading-relaxed whitespace-pre-wrap">{lead.projectDetails}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
