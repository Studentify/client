import { useRef, useCallback } from 'react';


export const useInfiniteScroll = (isLoading: boolean, nextPage: () => void) => {
  const observer = useRef<any>();
  
  const lastItemRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(enteries => {
      if (enteries[0].isIntersecting) {
        nextPage();
      }
    })

    if (node) observer.current.observe(node);
  }, [isLoading, nextPage]);
  
  return { lastItemRef };
}
