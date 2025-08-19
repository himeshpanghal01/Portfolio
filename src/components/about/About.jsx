import { Code, Coffee, Heart, Zap } from "lucide-react";

const About = () => {
  const educationStats = [
    { value: "2+", label: "Years of Study", color: "text-purple-500" },
    { value: "PCM", label: "Specialization", color: "text-blue-500" },
    { value: "B-tech", label: "Current Degree", color: "text-green-500" },
    { value: "15+", label: "Technologies", color: "text-green-500" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Frontend developer with a love for creating digital experiences
              that are not only functional but also beautiful and intuitive. My journey in web
              development started 2 years ago, and I've been constantly learning and evolving ever since.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in building modern, responsive web applications using JavaScript frameworks and scalable architecture. With a strong focus on clean design and user experience, I craft solutions that are both functional and elegant.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">What I Love:</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Building user-friendly interfaces
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Solving complex problems with elegant solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Learning new technologies and frameworks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Collaborating with creative teams
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {educationStats.map((edu, index) => (
              <div
                key={index}
                className="border border-slate-300 p-6 rounded-lg text-center"
              >
                <div className={`text-2xl font-bold ${edu.color} mb-2`}>{edu.value}</div>
                <div className="text-slate-600">{edu.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
