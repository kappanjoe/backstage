## API Report File for "@backstage/plugin-events-backend-module-azure"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { EventParams } from '@backstage/plugin-events-node';
import { EventsService } from '@backstage/plugin-events-node';
import { SubTopicEventRouter } from '@backstage/plugin-events-node';

// @public
export class AzureDevOpsEventRouter extends SubTopicEventRouter {
  constructor(options: { events: EventsService });
  // (undocumented)
  protected determineSubTopic(params: EventParams): string | undefined;
  // (undocumented)
  protected getSubscriberId(): string;
}

// Warnings were encountered during analysis:
//
// src/router/AzureDevOpsEventRouter.d.ts:13:5 - (ae-undocumented) Missing documentation for "getSubscriberId".
// src/router/AzureDevOpsEventRouter.d.ts:14:5 - (ae-undocumented) Missing documentation for "determineSubTopic".
```
