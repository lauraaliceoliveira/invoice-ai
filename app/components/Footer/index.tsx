import { GridContainer } from "../GridContainer";
import { footerItemsNav } from "../utils/data";
import { ItemNav } from "./ItemNav";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 xl:pt-16">
      <GridContainer>
        <div className="grid grid-cols-2 gap-8 xl:gap-0 md:flex xl:flex items-start justify-between pb-12 xl:pb-16">
          {footerItemsNav.map((item, index) => (
            <ItemNav
              key={index}
              title={item.title}
              itemsMenu={item.itemsMenu}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row xl:flex-row items-start md:items-center xl:items-center justify-between gap-6 xl:gap-0 border-t border-gray-200 pt-8">
          <Image src="/logo.svg" width={142} height={32} alt="logo" />
          <p className="text-gray-500">
            © 2025 in.voice AI. All rights reserved.
          </p>
        </div>
      </GridContainer>
    </footer>
  );
}
