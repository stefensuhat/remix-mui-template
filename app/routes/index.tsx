import type { LoaderFunction, MetaFunction } from 'remix';
import { json, Link, useLoaderData } from 'remix';
import React from 'react';
import { Box, Button } from '@mui/material';

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
  const data: IndexData = {
    resources: [
      {
        name: 'Remix Docs',
        url: 'https://remix.run/docs',
      },
      {
        name: 'React Router Docs',
        url: 'https://reactrouter.com/docs',
      },
      {
        name: 'Remix Discord',
        url: 'https://discord.gg/VBePs6d',
      },
    ],
    demos: [
      {
        to: 'demos/actions',
        name: 'Actions',
      },
      {
        to: 'demos/about',
        name: 'Nested Routes, CSS loading/unloading',
      },
      {
        to: 'demos/params',
        name: 'URL Params and Error Boundaries',
      },
    ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => ({
  title: 'Remix Starter',
  description: 'Welcome to remix!',
});

// https://remix.run/guides/routing#index-routes
const Index = () => {
  const data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Remix!</h2>
        <p>We&apos;re stoked that you&apos;re here. 🥳</p>
        <p>
          Feel free to take a look around the code to see how Remix does things,
          it might be a bit different than what you’re used to. When you&apos;re
          ready to dive deeper, we&apos;ve got plenty of resources to get you
          up-and-running quickly.
        </p>
        <p>
          Check out all the demos in this starter, and then just delete the
          {' '}
          <code>app/routes/demos</code>
          {' '}
          and
          <code>app/styles/demos</code>
          {' '}
          folders when you&apos;re ready to turn this into your next project.
        </p>
      </main>
      <aside>
        <h2>Demos In This App</h2>
        <ul>
          {data.demos.map((demo) => (
            <Box key={demo.to} mb={1}>
              <Button variant="contained" component={Link} to={demo.to} prefetch="intent" size="small">
                {demo.name}
              </Button>
            </Box>
          ))}
        </ul>
        <h2>Resources</h2>
        <ul>
          {data.resources.map((resource) => (
            <Box key={resource.url} sx={{ mb: 1 }}>
              <Button variant="contained" key={resource.url} component={Link} to={resource.url} size="small">
                {resource.name}
              </Button>
            </Box>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Index;
