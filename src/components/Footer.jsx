import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* JobHunt */}
          <div>
            <h2 className="text-2xl font-bold">
              Job<span className="text-red-500">Hunt</span>
            </h2>

            <p className="text-gray-400 text-sm mt-3 leading-6">
              Find your dream job and build your career with JobHunt.
              Explore opportunities and connect with top companies.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p className="hover:text-white cursor-pointer">About Us</p>
              <p className="hover:text-white cursor-pointer">Contact Us</p>
              <p className="hover:text-white cursor-pointer">Careers</p>
              <p className="hover:text-white cursor-pointer">Blog</p>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Job Seekers</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p className="hover:text-white cursor-pointer">Search Jobs</p>
              <p className="hover:text-white cursor-pointer">Browse Jobs</p>
              <p className="hover:text-white cursor-pointer">
                Create Profile
              </p>
              <p className="hover:text-white cursor-pointer">
                Career Advice
              </p>
            </div>
          </div>

          {/* Employers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Employers</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p className="hover:text-white cursor-pointer">Post a Job</p>
              <p className="hover:text-white cursor-pointer">
                Find Candidates
              </p>
              <p className="hover:text-white cursor-pointer">
                Employer Login
              </p>
              <p className="hover:text-white cursor-pointer">Pricing</p>
            </div>
          </div>

        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm">
            © 2026 JobHunt. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-400">
            <p className="hover:text-white cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-white cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;