import React, { useContext, useEffect, useRef, useState } from "react";

import { NomineesContext } from "../contexts/nominees";

import { NomineesSection, NomineesContainer } from "./Nominees.styled";
import Nominee from "./components/Nominee";

const Nominees = () => {
  const { searchedNominees } = useContext(NomineesContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const loadMoreRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [loadMoreRef.current]);

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCurrentPage((page) => page + 1);
    }
  };

  if (!searchedNominees) return null;

  return (
    <NomineesSection>
      <NomineesContainer>
        {searchedNominees.map((nominee) => (
          <Nominee nominee={nominee} />
        ))}
      </NomineesContainer>
      <h1 ref={loadMoreRef}>Loading...</h1>
    </NomineesSection>
  );
};

export default Nominees;
