import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export default function EditProfile() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    country: '',
    language: '',
    bio: '',
    photo: null
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, photo: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email) {
      toast.error('Please fill required fields');
      return;
    }
    console.log('Saved profile data:', form);
    toast.success('Profile saved successfully!');
  };

  const CustomSelect = ({ name, value, onChange, options, placeholder }) => {
    const [open, setOpen] = useState(false);
    const handleSelect = (opt) => {
      onChange({ target: { name, value: opt } });
      setOpen(false);
    };
    return (
      <div className="relative">
        <button
          type="button"
          className="w-full flex justify-between items-center border px-3 py-2 rounded bg-white"
          onClick={() => setOpen(!open)}
        >
          <span>{value || placeholder}</span>
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        </button>
        {open && (
          <ul className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
            {options.map((opt) => (
              <li
                key={opt}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      <div>
        <label className="block mb-1 font-medium">Full Name*</label>
        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email*</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Country</label>
        <CustomSelect
          name="country"
          value={form.country}
          onChange={handleChange}
          options={['UAE', 'USA', 'UK']}
          placeholder="Select country"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Preferred Language</label>
        <CustomSelect
          name="language"
          value={form.language}
          onChange={handleChange}
          options={['English', 'Arabic']}
          placeholder="Select language"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Short Bio</label>
        <textarea name="bio" value={form.bio} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Profile Photo</label>
        <input type="file" accept="image/*" onChange={handlePhoto} />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
    </form>
  );
}
