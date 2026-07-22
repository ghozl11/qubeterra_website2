import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const formInputClass =
  'w-full px-4 py-3.5 rounded-lg bg-[rgba(217,221,226,0.05)] border border-[rgba(217,221,226,0.15)] text-lunar-silver text-sm font-body placeholder:text-[rgba(138,146,157,0.6)] focus:outline-none focus:border-quantum-blue focus:shadow-[0_0_0_2px_rgba(0,174,239,0.15)] transition-all duration-300';

const labelClass = 'font-mono text-[11px] uppercase tracking-[0.05em] text-muted-text mb-2 block';

export function ContactForms() {
  const [fellowshipSubmitted, setFellowshipSubmitted] = useState(false);
  const [partnershipSubmitted, setPartnershipSubmitted] = useState(false);

  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fellowship Application Form */}
          <ScrollReveal pattern="A">
            <div
              className="sr-item rounded-xl p-8 md:p-10"
              style={{
                background: 'rgba(217, 221, 226, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(217, 221, 226, 0.1)',
                borderTop: '2px solid #00AEEF',
              }}
            >
              <h3 className="font-heading font-medium text-xl md:text-2xl text-electric-white mb-2">
                Apply for a Fellowship
              </h3>
              <p className="font-body text-sm text-muted-text mb-8">
                Begin your journey to becoming a deep tech builder.
              </p>

              {fellowshipSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[rgba(0,174,239,0.15)] flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="font-heading text-lg text-electric-white mb-2">Application Submitted</p>
                  <p className="font-body text-sm text-muted-text">We'll be in touch soon.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFellowshipSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input type="text" required className={formInputClass} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input type="email" required className={formInputClass} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input type="tel" className={formInputClass} placeholder="+1 234 567 890" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Country/Region</label>
                      <select required className={formInputClass}>
                        <option value="">Select</option>
                        <option>Egypt</option>
                        <option>Nigeria</option>
                        <option>Kenya</option>
                        <option>UAE</option>
                        <option>Saudi Arabia</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Domain</label>
                      <select required className={formInputClass}>
                        <option value="">Select</option>
                        <option>Quantum Computing</option>
                        <option>Robotics</option>
                        <option>AI</option>
                        <option>Computer Vision</option>
                        <option>Remote Sensing</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Background / Experience</label>
                    <textarea rows={4} className={formInputClass} placeholder="Tell us about your technical background..." />
                  </div>
                  <div>
                    <label className={labelClass}>Motivation Statement</label>
                    <textarea rows={4} className={formInputClass} placeholder="Why do you want to join Qubeterra?" />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] transition-all duration-300"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Partnership Inquiry Form */}
          <ScrollReveal pattern="A" delay={0.2}>
            <div
              className="sr-item rounded-xl p-8 md:p-10"
              style={{
                background: 'rgba(217, 221, 226, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(217, 221, 226, 0.1)',
                borderTop: '2px solid #00D0B8',
              }}
            >
              <h3 className="font-heading font-medium text-xl md:text-2xl text-electric-white mb-2">
                Partnership Inquiry
              </h3>
              <p className="font-body text-sm text-muted-text mb-8">
                For governments, enterprises, and institutions seeking strategic collaboration.
              </p>

              {partnershipSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[rgba(0,208,184,0.15)] flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D0B8" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="font-heading text-lg text-electric-white mb-2">Inquiry Sent</p>
                  <p className="font-body text-sm text-muted-text">Our team will respond within 48 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setPartnershipSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className={labelClass}>Organization Name</label>
                    <input type="text" required className={formInputClass} placeholder="Organization name" />
                  </div>
                  <div>
                    <label className={labelClass}>Contact Person</label>
                    <input type="text" required className={formInputClass} placeholder="Full name" />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input type="email" required className={formInputClass} placeholder="contact@organization.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Organization Type</label>
                      <select required className={formInputClass}>
                        <option value="">Select</option>
                        <option>Government</option>
                        <option>Enterprise</option>
                        <option>NGO</option>
                        <option>Academic Institution</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Partnership Interest</label>
                      <select required className={formInputClass}>
                        <option value="">Select</option>
                        <option>DPI Policy</option>
                        <option>AI Strategy</option>
                        <option>Fellowship Sponsorship</option>
                        <option>Research Collaboration</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea rows={8} className={formInputClass} placeholder="Tell us about your partnership goals..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] transition-all duration-300"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
