"use client";
import React, { ChangeEvent, useState } from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Spacer,
} from "@nextui-org/react";
import { SearchIcon } from "../navbar/SearchIcons";
import Logo from "./Logo";
import Menu from "@/components/iconos/Menu";
import Product from "@/components/iconos/Product";
import Shops from "@/components/iconos/Shops";

export default function App() {
  const router = useRouter();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState("");

  const validateSearchTerm = (searchTerm: string): boolean => {
    const palabras = searchTerm.split(" ");
    if (palabras.length === 1) {
      return true;
    } else {
      return false;
    }
  };

  const validationState = React.useMemo(() => {
    if (searchTerm === "") return undefined;

    return validateSearchTerm(searchTerm) ? "valid" : "invalid";
  }, [searchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateSearchTerm(searchTerm)) {
      console.log(searchTerm);
      pathname.includes("shops")
        ? router.push(`/shops/search/${searchTerm}`)
        : router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <Navbar className="bg-blue-600 "  maxWidth="2xl">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo height={26} width={217} />
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-3">
          <NavbarItem>
            <Link
              className="text-white"
              underline={!pathname.includes("shops") ? "always" : "hover"}
              as={NextLink}
              href="/"
            >
              Productos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-white"
              underline={pathname.includes("shops") ? "always" : "hover"}
              as={NextLink}
              href="/shops"
              aria-current="page"
              color="secondary"
            >
              Tiendas
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <form onSubmit={handleSubmit}>
          <Input
            classNames={{
              
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                `h-full font-normal text-default-500 bg-default-100/20 dark:bg-default-500/20 `,
                
            }}   
            //color={validationState === "invalid" ? "danger" : "success"}
            errorMessage={
              validationState === "invalid" && "Busque por una sola palabra"
            }
            validationState={validationState}
            value={searchTerm}
            placeholder="Buscar..."
            size="sm"
            startContent={<SearchIcon  size={18} />}
            type="search"
            onChange={handleChange}
          />
        </form>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="md:hidden">
              <Menu className="w-5 h-5" />
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="p-0"
          >
            <DropdownItem key="Productos" className="p-0">
              <Link
                className="flex justify-start w-full"
                href="/"
                as={NextLink}
              >
                <div className="flex ml-2">
                  {<Product width={20} height={20} />}
                  <Spacer x={1} />
                  <p>Productos</p>
                </div>
              </Link>
            </DropdownItem>

            <DropdownItem key="Shops" className="p-0">
              <Link
                className="flex justify-start w-full"
                href="/shops"
                as={NextLink}
              >
                <div className="flex ml-2">
                  {<Shops className="mt-1" width={20} height={18} />}
                  <Spacer x={1} /> <p>Tiendas</p>
                </div>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
