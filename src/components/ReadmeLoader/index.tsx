import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TOCInline from '@theme/TOCInline';

type ReadmeLoaderProps = {
    repo: string;
    branch?: string;
    org?: string;
};

type TOCItem = {
    value: string;
    id: string;
    level: number;
};

const extractTOC = (markdown: string): TOCItem[] => {
  const lines = markdown.split('\n');
  return lines
    .map((line) => {
      const match = line.match(/^(#+)\s+(.*)/);
      if (match) {
        const level = match[1].length; // Number of '#' indicates the level
        const value = match[2].trim();
        const id = value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        return { value, id, level };
      }
      return null;
    })
    .filter(item => item !== null); // Remove null entries
};

const ReadmeLoader = ({ repo, branch='main', org }: ReadmeLoaderProps) => {
  const {siteConfig} = useDocusaurusContext();
  const [content, setContent] = useState('## Loading README...');
  const [toc, setToc] = useState([]);
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
        
        const toc = extractTOC(text);
        setToc(toc);
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
      <TOCInline toc={toc} />
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
};

export default ReadmeLoader;
