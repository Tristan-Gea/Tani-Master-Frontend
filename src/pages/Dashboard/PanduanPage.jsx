import React from "react";
import LayoutPanduan from "../../components/Layout/LayoutPanduan";
import {Accordion, AccordionItem} from "@nextui-org/react";

const PanduanPage = () => {
  console.log("Rendering DashboardPage...");
  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  return (
    <LayoutPanduan>
      <Accordion defaultExpandedKeys={["1"]} selectionMode="multiple" variant="splitted">
        {/* How to use */}
        <AccordionItem key="1" aria-label="Accordion 1" subtitle=". . . ." title="How to use?" className="bg-green-100 font-semibold shadow-[0px_4px_6px_rgba(0,0,0,0.1)] shadow-gray-500">
        <ul className="font-normal text-slate-700 ">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quo veritatis maiores odio autem eveniet ab debitis cumque unde aliquid!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quo veritatis maiores odio autem eveniet ab debitis cumque unde aliquid!</li>
        </ul>
        </AccordionItem>
        </Accordion>

      {/* FAQ */}
      <Accordion selectionMode="multiple" variant="splitted">
      <AccordionItem key="3" aria-label="Accordion 3" subtitle=". . . ." title="FAQ" className="bg-green-100 font-semibold shadow-[0px_4px_6px_rgba(0,0,0,0.1)] shadow-gray-500">
        <span>
          <ul className="font-semibold pb-4">Apakah akan ada pembaruan kedepannya?
            <li className="font-normal text-slate-600">Ya tentu saja akan ada pembaruan kedepannya, seperti penambahan fitur, penyesuaian layout, dan berbagai penyesuaian lainnya!</li>
          </ul>
          <ol className="font-semibold">Apakah data bisnis saya dijamin keamanannya?
            <li className="font-normal text-slate-600">Ya tentu saja, keamanan pengguna sangat diutamakan dengan melindungi aktivitas user pada platform</li>
          </ol>
        </span>
      </AccordionItem>
    </Accordion>

    {/* belum tau */}
    <Accordion disabledKeys={["2"]} selectionMode="multiple" variant="splitted">
      <AccordionItem key="2" aria-label="Accordion 2" className="bg-green-100 shadow-[0px_4px_6px_rgba(0,0,0,0.1)] shadow-gray-500" subtitle={
          <span>. . . .</span>
        } title="under construction">
        {defaultContent}
      </AccordionItem>
      </Accordion>

    </LayoutPanduan>
  );
};



export default PanduanPage;