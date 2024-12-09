// hooks/use-outside-click.ts
import { useEffect, useRef} from 'react';

export const useOutsideClick = (
  callback: () => void, 
  ignoreClassNames?: string[]
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current && 
        !ref.current.contains(event.target as Node) && 
        (!ignoreClassNames || 
          !ignoreClassNames.some(className => 
            (event.target as Element).closest(`.${className}`)
          )
        )
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ignoreClassNames]);

  return ref;
};