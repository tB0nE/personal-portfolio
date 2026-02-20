import React, { useState } from 'react';
import { Download, Languages, Loader2 } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { cvDataEn, cvDataIt } from '../../data/cvData';
import CVDocument from './CVDocument';
import './CVPage.css';

const CVPage: React.FC = () => {
  const [language, setLanguage] = useState<'EN' | 'IT'>('EN');
  const [isGenerating, setIsGenerating] = useState(false);

  const data = language === 'EN' ? cvDataEn : cvDataIt;

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      const doc = <CVDocument data={data} />;
      const blob = await pdf(doc).toBlob();
      saveAs(blob, `Tyrone_Hattingh_CV_${language}.pdf`);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="cvContainer">
      <header className="cvHeader">
        <div className="controls">
          <div className="controlGroup">
            <Languages size={18} />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as 'EN' | 'IT')}
              className="select"
            >
              <option value="EN">English</option>
              <option value="IT">Italiano</option>
            </select>
          </div>

          <button 
            onClick={handleDownload} 
            className="btn-primary" 
            disabled={isGenerating}
          >
            {isGenerating ? (
              <Loader2 size={18} className="spin" />
            ) : (
              <Download size={18} />
            )}
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </button>
        </div>
      </header>

      <div className="paper">
        <section className="hero">
          <h1>{data.name}</h1>
          <p className="subtitle">{data.title}</p>
          <div className="contactInfo">
            <span>{data.location}</span> • 
            <span>{data.phone}</span> • 
            <span>{data.email}</span>
          </div>
        </section>

        <section className="section">
          <p className="summary">{data.summary}</p>
        </section>

        <div className="columns">
          <div className="mainColumn">
            <section className="section">
              <h2>Professional Experience</h2>
              {data.experience.map((exp, idx) => (
                <div key={idx} className="experienceItem">
                  <div className="expHeader">
                    <h3>{exp.company}</h3>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p className="role">{exp.role}</p>
                  <p className="expDesc">{exp.description}</p>
                  <ul className="bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="techStack">
                    <strong>Technologies:</strong> {exp.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </section>

            <section className="section">
              <h2>Selected Technical Projects</h2>
              <div className="projectsGrid">
                {data.projects.map((proj, idx) => (
                  <div key={idx} className="projectItem">
                    <h4>{proj.title}</h4>
                    <p>{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="sidebar">
            <section className="section">
              <h2>Core Skills</h2>
              <div className="skillGroup">
                <h3>Languages & Frameworks</h3>
                <p>{data.coreSkills.languages.join(' • ')}</p>
              </div>
              <div className="skillGroup">
                <h3>Infrastructure & Tools</h3>
                <p>{data.coreSkills.infrastructure.join(' • ')}</p>
              </div>
            </section>

            <section className="section">
              <h2>Education</h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="eduItem">
                  <h4>{edu.degree} | {edu.year}</h4>
                  <p>{edu.institution}</p>
                  <ul className="bullets">
                    {edu.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section className="section">
              <h2>Languages</h2>
              {data.languages.map((lang, idx) => (
                <p key={idx}><strong>{lang.name}</strong> — {lang.level}</p>
              ))}
              <p className="marginTop">
                <strong>{language === 'EN' ? 'Citizenship:' : 'Cittadinanza:'}</strong> {language === 'EN' ? 'South African and Italian' : 'Sudafricana e Italiana'}
              </p>
            </section>

            <section className="section">
              <h2>Interests</h2>
              <ul className="bullets">
                {data.interests.map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
