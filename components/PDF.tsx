// components/ResumePDF.tsx
import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 20 },
  section: { margin: 10, fontSize: 12 },
  image: { width: 100, height: 100, borderRadius: 50 },
});

interface ResumePDFProps {
  data: any;
}

const ResumePDF: React.FC<ResumePDFProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{data.name}</Text>
        <Text>{data.phone}</Text>
        <Text>{data.about}</Text>
        <Text>Skills: {data.skills}</Text>
        <Text>Experience: {data.experience}</Text>
        <Text>Projects: {data.projects}</Text>
        {data.profilePicture && <Image src={URL.createObjectURL(data.profilePicture)} style={styles.image} />}
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
