'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Heart } from 'lucide-react';

export default function RsvpFormModal({
  invitationId,
  isOpen,
  onClose,
}: {
  invitationId: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendingCount, setAttendingCount] = useState(1);
  const [status, setStatus] = useState('ATTENDING');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          invitationId,
          guestName,
          phone,
          attendingCount: Number(attendingCount),
          status,
          message,
        }),
      });
      setSubmitted(true);
    } catch (e) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-xs">
      <div className="card-2d w-full max-w-lg p-6 sm:p-8 relative space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full bg-gray-50 border border-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">RSVP Confirmed!</h3>
            <p className="text-xs text-gray-600 max-w-xs mx-auto">
              Thank you <strong className="text-gray-900">{guestName}</strong> for responding. Your response has been saved.
            </p>
            <button
              onClick={onClose}
              className="btn-primary-emerald py-2.5 px-6 text-xs font-bold mt-4"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 stroke-none" />
              <h3 className="text-lg font-bold text-gray-900">Confirm Attendance</h3>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Rashid Khan"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guests Attending</label>
                <select
                  value={attendingCount}
                  onChange={(e) => setAttendingCount(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
                >
                  <option value={1}>1 Person</option>
                  <option value={2}>2 Persons</option>
                  <option value={3}>3 Persons</option>
                  <option value={4}>4 Persons</option>
                  <option value={5}>5+ Family Group</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Attendance Status</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setStatus('ATTENDING')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-colors ${
                    status === 'ATTENDING'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Joyfully Attending
                </button>
                <button
                  type="button"
                  onClick={() => setStatus('NOT_ATTENDING')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-colors ${
                    status === 'NOT_ATTENDING'
                      ? 'bg-rose-600 text-white border-rose-600'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Regretfully Decline
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Warm Message / Blessings</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Congratulations to the lovely couple!"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary-emerald w-full py-3 text-xs font-bold shadow-sm"
            >
              {loading ? 'Submitting...' : 'Send Response'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
