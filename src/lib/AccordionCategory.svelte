<script>
    import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
    const items = Array(3);
  
    const open_all = () => items.forEach((_, i) => (items[i] = true));
    const close_all = () => items.forEach((_, i) => (items[i] = false));
  </script>
  
  <Button on:click={open_all}>Open all</Button>
  <Button on:click={close_all}>Close all</Button>
  <Accordion multiple class="bg-gray-100 focus:ring-4"  >
    <AccordionItem  bind:open={items[0]}>
      <span slot="header">My Header 1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
        and start developing websites even faster with components on top of Tailwind CSS.
      </p>
    </AccordionItem>
    <AccordionItem bind:open={items[1]}>
      <div slot="header">My Header 2</div>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    </AccordionItem>
    <AccordionItem bind:open={items[2]}>
      <div slot="header">My Header 3</div>
      <p>Something more</p>
    </AccordionItem>
  </Accordion>