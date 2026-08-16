import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      let current = sectionIds[0] ?? '';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return active;
}
