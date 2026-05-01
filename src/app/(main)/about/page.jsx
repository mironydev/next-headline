import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";

export const metadata = {
  title: "About Us | NextHeadline",
  description: "Learn more about NextHeadline, your trusted source for news.",
};

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About NextHeadline</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering accurate, timely, and unbiased news to keep you informed
            about the world that matters.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At NextHeadline, our mission is to provide reliable journalism
              that empowers readers with truth and clarity. We believe in
              responsible reporting, transparency, and delivering stories that
              shape perspectives and spark meaningful conversations.
            </p>
          </div>
          <div className=" rounded-xl flex items-center justify-center">
            <Image
              src="https://www.ifj.org/fileadmin/_processed_/e/5/csm_battleface-ifj-press-4_a2c897be8c.jpg"
              alt=""
              width={500}
              height={500}
              className="w-auto h-auto rounded-lg"
            ></Image>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">
            What We Cover
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Politics",
              "Technology",
              "Business",
              "World News",
              "Health",
              "Entertainment",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 p-6 rounded-xl border border-stone-500/30 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">
                  In-depth coverage and updates on {item.toLowerCase()} from
                  trusted sources.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We uphold the highest standards of honesty and accuracy in all
                our reporting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Independence</h3>
              <p className="text-gray-600 text-sm">
                Our journalism is free from external influence and bias.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Accountability</h3>
              <p className="text-gray-600 text-sm">
                We take responsibility for our work and remain transparent with
                our audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-10">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our team consists of experienced journalists, editors, and analysts
            dedicated to bringing you credible and impactful news stories.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Editor-in-Chief", "Senior Reporter", "Content Strategist"].map(
              (role, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-xl"
                >
                  <div className="p-5 text-4xl w-fit mx-auto rounded-full bg-gray-300 mb-4">
                    <FaUser />
                  </div>
                  <h3 className="font-semibold">Team Member</h3>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Stay Informed with NextHeadline
          </h2>
          <p className="text-gray-600 mb-6">
            Join our growing community and never miss important updates.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
