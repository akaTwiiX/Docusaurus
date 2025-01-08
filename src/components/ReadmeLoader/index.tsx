import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

type ReadmeLoaderProps = {
    repo: string;
    branch?: string;
    org?: string;
};

const ReadmeLoader = ({ repo, branch='main', org }: ReadmeLoaderProps) => {
  const {siteConfig} = useDocusaurusContext();
  const [content, setContent] = useState('## Loading README...');
  const orgName = org || siteConfig.organizationName;

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/${orgName}/${repo}/${branch}/README.md`
        );

        if (!response.ok) throw new Error('README could not be loaded.');

        let text = await response.text();

        // Remove h1 title
        text = text
        .split('\n')
        .filter((line, index) => {
          if (index === 0 && line.startsWith('#')) {
            return false; 
          }
          return true;
        })
        .join('\n');
        setContent(text);
      } catch (error) {
        console.error(error);
        setContent('## Error loading README file.');
      }
    };

    fetchReadme();
  }, [repo]);

  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
};

export default ReadmeLoader;
