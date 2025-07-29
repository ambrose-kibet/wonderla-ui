import { signal } from "@preact/signals-react";

export const isSidebarOpen = signal<boolean>(false);

export const openSidebar = () => {
  isSidebarOpen.value = true;
};

export const closeSidebar = () => {
  isSidebarOpen.value = false;
};
