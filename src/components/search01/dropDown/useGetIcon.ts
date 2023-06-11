import React, { useEffect, useState } from "react";

type Props = { query: string };
type dataProps = { data: any; setElements: Function; setnameIcons: Function };

//https://api.iconify.design/search?query=nextjs
//https://api.iconify.design/teenyicons/nextjs-outline.svg

export default function useGetIcon(query: string) {
  const [elements, setElements] = useState([""]);
  const [nameIcons, setnameIcons] = useState([""]);
  useEffect(() => {
    try {
      fetch("https://api.iconify.design/search?query=" + query)
        .then((response) => response.json())
        .then((data) => {
          const mapping = data.icons?.map((icon: string, i: number) =>
            icon.split(":")
          );
          const newElements = mapping?.map(
            (item: string) =>
              `https://api.iconify.design/${item[0]}/${item[1]}.svg`
          );
          const newNameIcons = mapping?.map((item: string) => `${item[1]}`);

          setElements(newElements);
          setnameIcons(newNameIcons);
        });
    } catch (error) {
      setElements(["Ha ocurrido un error , intente luego"]);
      setnameIcons([""]);
    }
  }, [query]);

  return { elements, nameIcons };
}
