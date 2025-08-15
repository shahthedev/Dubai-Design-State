import { useState } from 'react'
import { CameraIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import toast, { Toaster } from 'react-hot-toast'

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    fullName: 'Muhammad Shahzore',
    email: 'shahzoreasif2@gmail.com',
    country: 'United Arab Emirates',
    language: 'English',
    bio: 'Enthusiastic designer focused on creating efficient and user-friendly solutions. Always eager to learn and contribute to impactful projects.',
    photo: null,
  })
  const [errors, setErrors] = useState({})

  const countries = ['United Arab Emirates', 'United States', 'United Kingdom']
  const languages = ['English', 'Arabic', 'French']

  const validate = () => {
    const e = {}
    if (!formData.fullName.trim()) e.fullName = 'Full name is required'
    if (!formData.email) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email format'
    if (!formData.country) e.country = 'Please select a country'
    if (!formData.language) e.language = 'Please select a language'
    if (!formData.bio.trim()) e.bio = 'Bio is required'
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }
    setErrors({})
    toast.success('Profile saved successfully!')
  }

  return (
    <>
      <button type="button" className="pb-5 md:flex hidden text-gray-600 text-sm items-center gap-1 hover:underline">
        <span aria-hidden><ChevronLeftIcon className="h-4"/></span>
        <span className='font-semibold text-black'>Back</span>
      </button>
      <section className="card p-0 md:p-6">
        <Toaster position="bottom-center" />

        <div className="">
          <div className="flex items-center space-x-4">
            <div className="relative">
              {formData.photo ? (
                <img src={URL.createObjectURL(formData.photo)} alt="Profile" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
              ) : (
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&auto=format&fit=crop" alt="Profile placeholder" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
              )}
              {/* Small upload badge */}
              <label className="absolute -bottom-1 -right-1 bg-brand-blue text-white rounded-full p-1 cursor-pointer shadow">
                <CameraIcon className="w-4 h-4" />
                
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setFormData({ ...formData, photo: e.target.files?.[0] ?? null })}
                  aria-label="Upload profile photo"
                />
              </label>
            </div>
            <div className="py-2">
              <h1 className="text-lg md:text-xl font-medium text-black leading-tight mb-2">{formData.fullName || '—'}</h1>
              <p className="text-sm md:text-base text-gray-500">{formData.email || '—'}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="py-5 space-y-5 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
            {/* Full name */}
            <div>
              <label className="label-like">Full Name</label>
              <input
                className="input-like"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                type="text"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="label-like">Email</label>
              <input
                className="input-like"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type="email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="label-like">Country of residence</label>
              <select
                className="input-like"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              >
                <option value="">Select country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>

            {/* Language */}
            <div>
              <label className="label-like">Preferred language</label>
              <select
                className="input-like"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              >
                <option value="">Select language</option>
                {languages.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              {errors.language && <p className="text-red-500 text-xs mt-1">{errors.language}</p>}
            </div>
          </div>

          {/* Bio full width */}
          <div>
            <label className="label-like">Short Bio</label>
            <textarea
              rows="4"
              className="input-like"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
            {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 items-center pt-2">
            <button type="submit" className="text-gray-600 w-1/2 md:hidden flex justify-center  items-center gap-1 hover:underline px-6 py-2 rounded-lg text-sm font-medium hover:brightness-95">
              <span aria-hidden><ChevronLeftIcon className="h-4"/></span>
              <span className='font-semibold text-black'>Back</span>
            </button>
            <button type="submit" className="md:ms-auto md:w-auto w-1/2 bg-brand-blue text-white px-6 py-2 rounded-lg text-sm font-medium hover:brightness-95">
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
