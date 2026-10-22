import { useRef } from 'react';
import { useContactStore } from '../../store/contactStore';
import useLanguageStore from '../../store/languageStore';
import {
  FiAtSign,
  FiPhone,
  FiPaperclip,
  FiArrowRight,
  FiCheckCircle,
  FiX,
  FiLoader,
} from 'react-icons/fi';

const scopeTranslations = {
  'Website Development': 'تطوير المواقع',
  'Web Application': 'تطبيقات الويب',
  'E-Commerce': 'متاجر إلكترونية',
  'Mobile Apps': 'تطبيقات الجوال',
  'UI/UX & Systems': 'تصميم UI/UX والأنظمة',
  'Technical Advisory': 'استشارات تقنية',
};

const deliveryTranslations = {
  'Immediate (<1m)': 'فوري (< شهر)',
  '1 – 3 Months': '1 – 3 أشهر',
  '3+ Months': 'أكثر من 3 أشهر',
  'Flexible': 'مرن / حسب الحاجة',
};

export default function ContactFormSection() {
  const fileInputRef = useRef(null);
  const { language, t } = useLanguageStore();
  const isAr = language === 'ar';

  const {
    formData,
    scopeOptions,
    deliveryOptions,
    isSubmitting,
    isSubmitted,
    errorMessage,
    setField,
    setAttachedFile,
    removeAttachedFile,
    submitForm,
    resetForm,
  } = useContactStore();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        alert(isAr ? 'حجم الملف يتجاوز الحد الأقصى 25 ميجابايت.' : 'File size exceeds the 25MB limit.');
        return;
      }
      setAttachedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <section id="contact-form" className="w-full bg-(--bg-color) py-12 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-[#103324] text-base sm:text-lg leading-relaxed font-normal">
              {t('contactPage.introStatement')}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Direct Inbox */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-emerald-900/10 shadow-xs hover:border-emerald-600/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#16754F] shrink-0 text-lg border border-emerald-950/5">
                  <FiAtSign />
                </div>
                <div>
                  <span className="block text-[10px] font-bold tracking-widest text-[#16754F] uppercase">
                    {t('contactPage.emailSupport')}
                  </span>
                  <a
                    href="mailto:hello@digitalcraft.com"
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#16754F] transition-colors"
                  >
                    hello@digitalcraft.com
                  </a>
                </div>
              </div>

              {/* Studio Telephony */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-emerald-900/10 shadow-xs hover:border-emerald-600/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#16754F] shrink-0 text-lg border border-emerald-950/5">
                  <FiPhone />
                </div>
                <div>
                  <span className="block text-[10px] font-bold tracking-widest text-[#16754F] uppercase">
                    {t('contactPage.phoneSupport')}
                  </span>
                  <a
                    href="https://wa.me/201115926334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#16754F] transition-colors"
                  >
                    +20 1115926334
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (FORM) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-emerald-950/5 border border-emerald-900/10">

              {isSubmitted ? (
                /* Success Feedback State */
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl shadow-xs">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {t('contactPage.fields.successTitle')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    {isAr ? (
                      <>
                        شكراً لك يا <span className="font-bold text-slate-900">{formData.fullName}</span>. سيقوم مستشارونا التقنيون بدراسة متطلباتك والرد على بريدك <span className="font-bold text-slate-900">{formData.workEmail}</span> في غضون 24 ساعة.
                      </>
                    ) : (
                      <>
                        Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our technical partners are evaluating your specifications and will respond to <span className="font-bold text-slate-900">{formData.workEmail}</span> within 24 hours.
                      </>
                    )}
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl bg-[#032318] hover:bg-[#073627] text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
                    >
                      {t('contactPage.fields.sendAnother')}
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Row 1: Full Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-2">
                        {t('contactPage.fields.fullName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t('contactPage.fields.fullNamePlaceholder')}
                        value={formData.fullName}
                        onChange={(e) => setField('fullName', e.target.value)}
                        className="w-full bg-[#E5F3EB] text-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#16754F]/50 placeholder-slate-400 font-medium transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-2">
                        {t('contactPage.fields.workEmail')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t('contactPage.fields.workEmailPlaceholder')}
                        value={formData.workEmail}
                        onChange={(e) => setField('workEmail', e.target.value)}
                        className="w-full bg-[#E5F3EB] text-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#16754F]/50 placeholder-slate-400 font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company / Organization */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-2">
                      {t('contactPage.fields.company')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('contactPage.fields.companyPlaceholder')}
                      value={formData.company}
                      onChange={(e) => setField('company', e.target.value)}
                      className="w-full bg-[#E5F3EB] text-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#16754F]/50 placeholder-slate-400 font-medium transition-all"
                    />
                  </div>

                  {/* Row 3: Primary Engagement Scope */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-2.5">
                      {t('contactPage.fields.primaryScope')}
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {scopeOptions.map((scope) => {
                        const isSelected = formData.primaryScope === scope;
                        const displayScope = isAr && scopeTranslations[scope] ? scopeTranslations[scope] : scope;
                        return (
                          <button
                            key={scope}
                            type="button"
                            onClick={() => setField('primaryScope', scope)}
                            className={`text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition-all cursor-pointer select-none ${
                              isSelected
                                ? 'bg-[#032318] text-white shadow-xs font-semibold'
                                : 'bg-[#E5F3EB] text-[#063223] hover:bg-[#d5ece0]'
                            }`}
                          >
                            {displayScope}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Delivery Target */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-2.5">
                      {t('contactPage.fields.deliveryTarget')}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {deliveryOptions.map((delivery) => {
                        const isSelected = formData.deliveryTarget === delivery;
                        const displayDelivery = isAr && deliveryTranslations[delivery] ? deliveryTranslations[delivery] : delivery;
                        return (
                          <button
                            key={delivery}
                            type="button"
                            onClick={() => setField('deliveryTarget', delivery)}
                            className={`text-xs sm:text-sm font-medium py-2.5 px-3 rounded-lg text-center transition-all cursor-pointer select-none ${
                              isSelected
                                ? 'bg-[#032318] text-white shadow-xs font-semibold'
                                : 'bg-[#E5F3EB] text-[#063223] hover:bg-[#d5ece0]'
                            }`}
                          >
                            {displayDelivery}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Project Details & Scope */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-2">
                      {t('contactPage.fields.projectDetails')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t('contactPage.fields.projectDetailsPlaceholder')}
                      value={formData.projectDetails}
                      onChange={(e) => setField('projectDetails', e.target.value)}
                      className="w-full bg-[#E5F3EB] text-slate-900 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#16754F]/50 placeholder-slate-400 font-medium resize-y transition-all"
                    />
                  </div>

                  {/* Row 6: File Attachment Box */}
                  <div className="bg-[#E5F3EB] rounded-xl p-3 sm:p-3.5 flex items-center justify-between border border-transparent hover:border-emerald-300/60 transition-colors">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.zip"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <div className="flex items-center gap-3 overflow-hidden pe-2">
                      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-slate-700 shadow-xs shrink-0">
                        <FiPaperclip className="text-base" />
                      </div>
                      <div className="truncate">
                        {formData.attachedFile ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-emerald-950 truncate max-w-[200px] sm:max-w-xs">
                              {formData.attachedFile.name}
                            </span>
                            <span className="text-[11px] text-slate-500 font-semibold shrink-0">
                              ({formData.attachedFile.size})
                            </span>
                          </div>
                        ) : (
                          <>
                            <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                              {t('contactPage.fields.attachFile')}
                            </p>
                            <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                              {t('contactPage.fields.attachFileHelp')}
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0">
                      {formData.attachedFile ? (
                        <button
                          type="button"
                          onClick={removeAttachedFile}
                          className="flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 bg-white/80 hover:bg-white px-3 py-1.5 rounded-md transition-colors shadow-xs cursor-pointer"
                        >
                          <FiX className="text-sm" />
                          <span>{t('contactPage.fields.removeFile')}</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-xs font-black tracking-wider text-slate-800 uppercase px-3 py-1.5 rounded-md hover:bg-white/80 transition-all cursor-pointer"
                        >
                          {isAr ? 'تصفح' : 'BROWSE'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-lg font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#032318] hover:bg-[#073627] active:scale-[0.99] text-white py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <FiLoader className="animate-spin text-lg" />
                        <span>{t('contactPage.fields.submittingBtn')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('contactPage.fields.submitBtn')}</span>
                        <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
