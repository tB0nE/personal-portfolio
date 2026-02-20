import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { CVData } from '../../types/cvTypes';

// Register fonts if needed (standard ones work by default)
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    color: '#333',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    fontSize: 9,
    color: '#888',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 3,
    marginBottom: 8,
  },
  summary: {
    fontStyle: 'italic',
    lineHeight: 1.4,
    marginBottom: 15,
  },
  columns: {
    flexDirection: 'row',
    gap: 20,
  },
  mainColumn: {
    flex: 2,
  },
  sidebar: {
    flex: 1,
  },
  expItem: {
    marginBottom: 12,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  period: {
    fontSize: 9,
    color: '#777',
  },
  role: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 9.5,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 10,
  },
  bulletPoint: {
    width: 10,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.3,
  },
  techStack: {
    fontSize: 8.5,
    marginTop: 5,
    padding: 5,
    backgroundColor: '#f9f9f9',
  },
  skillGroup: {
    marginBottom: 10,
  },
  skillTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  projectItem: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 'bold',
  }
});

interface Props {
  data: CVData;
}

const CVDocument = ({ data }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.contactRow}>
          <Text>{data.location}  •  {data.phone}  •  {data.email}</Text>
        </View>
      </View>

      <Text style={styles.summary}>{data.summary}</Text>

      <View style={styles.columns}>
        <View style={styles.mainColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {data.experience.map((exp, i) => (
              <View key={i} style={styles.expItem}>
                <View style={styles.expHeader}>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.period}>{exp.period}</Text>
                </View>
                <Text style={styles.role}>{exp.role}</Text>
                {exp.bullets.map((b, bi) => (
                  <View key={bi} style={styles.bullet}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{b}</Text>
                  </View>
                ))}
                <Text style={styles.techStack}>
                  Technologies: {exp.technologies.join(', ')}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selected Technical Projects</Text>
            {data.projects.map((proj, i) => (
              <View key={i} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{proj.title}</Text>
                <Text>{proj.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sidebar}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Core Skills</Text>
            <View style={styles.skillGroup}>
              <Text style={styles.skillTitle}>Languages & Frameworks</Text>
              <Text>{data.coreSkills.languages.join(' • ')}</Text>
            </View>
            <View style={styles.skillGroup}>
              <Text style={styles.skillTitle}>Infrastructure & Tools</Text>
              <Text>{data.coreSkills.infrastructure.join(' • ')}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, i) => (
              <View key={i} style={styles.expItem}>
                <Text style={styles.projectTitle}>{edu.degree} | {edu.year}</Text>
                <Text>{edu.institution}</Text>
                {edu.bullets.map((b, bi) => (
                  <View key={bi} style={styles.bullet}>
                    <Text style={styles.bulletPoint}>-</Text>
                    <Text style={styles.bulletText}>{b}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {data.languages.map((lang, i) => (
              <Text key={i}>{lang.name} — {lang.level}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Interests</Text>
            {data.interests.map((interest, i) => (
              <Text key={i}>• {interest}</Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
