import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Careers | NextHeadline",
  description: "Join NextHeadline and help shape the future of journalism.",
};

const jobs = [
  {
    title: "Senior News Reporter",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Content Editor",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Social Media Manager",
    location: "Remote",
    type: "Part-time",
  },
];

const CareerPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Careers at NextHeadline</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a team committed to delivering accurate, impactful journalism.
            Help us inform, inspire, and make a difference.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-110 duration-150">
              <h3 className="font-semibold mb-2">Impactful Work</h3>
              <p className="text-gray-600 text-sm">
                Be part of a platform that informs thousands of readers daily
                with meaningful stories.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-110 duration-150">
              <h3 className="font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">
                Learn, grow, and develop your skills in a fast-paced digital
                newsroom.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-110 duration-150">
              <h3 className="font-semibold mb-2">Flexible Environment</h3>
              <p className="text-gray-600 text-sm">
                Work remotely with a collaborative and supportive team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Open Positions
          </h2>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition"
              >
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-sm text-gray-500">
                    {job.location} • {job.type}
                  </p>
                </div>

                <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
            <p className="text-gray-600 leading-relaxed">
              At NextHeadline, we value curiosity, integrity, and collaboration.
              Our team thrives on asking questions, seeking truth, and
              delivering high-quality journalism without compromise.
            </p>
          </div>

          <div className=" flex items-center justify-center">
            <Image
              src="https://thumbs.dreamstime.com/b/teamwork-team-together-collaboration-business-communication-outd-outdoors-concept-48568990.jpg"
              alt=""
              height={500}
              width={500}
              className="rounded-xl max-h-72"
            ></Image>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;re always looking for talented individuals. Send us your
            resume and tell us how you can contribute.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
