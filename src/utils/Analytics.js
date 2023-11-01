It seems you want to enhance the provided code snippet and make it more engaging and cohesive. One way to do this is to take advantage of custom Hooks in React for abstraction and adhere to coding best practices.

Here's one way you might refactor and enhance the current `Analytics` component:

```javascript
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

export function useRouteAnalytics() {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = url => gtag.pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Clean-up function
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);
}

export default function Analytics() {
  useRouteAnalytics();
  
  // Placeholder for other logic
  
  return null;
}

export const trackUserEngagement = (event, params) => gtag.event({ action: event, params });
```

Now the `useRouteAnalytics` Hook can be used in any component that needs to track route changes, enhancing code reusability and enclosing side-effects within the Hook.

For complex projects, you would have a structured file system like a folder for all hooks, separate folders for components, services, and utilities. This approach boosts maintainability as complexity increases.

Now, let's add some functionality to track user engagement using AI. Imagine having a complex AI model that predicts user engagement based on their actions. We could quickly sketch the following:

```javascript
import { AImodel } from '../services/AImodel';

export const trackUserEngagement = (event, params) => {
  // process the event and parameters using the AI model
  const processedParams = AImodel.predict(params);
  gtag.event({ action: event, params: processedParams });
};
```

Remember, this is a basic idea, and real-world scenarios might be far complex.