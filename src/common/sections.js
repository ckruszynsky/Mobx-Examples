import {
  CreateObservableExample,
  BoxObservableExample,
  ArrayObservableExample,
  MapObservableExample,
  ComputedObservableExample,
  BasicActionExample,
  EnforceActionExample,
  DecoratorActionExample,
  AutorunReactionExample,
  ReactionExample,
  WhenReactionExample
} from "../sections/section-01";
import BookSearchApp from "../sections/section-02";
export const sections = applyPathPrefix([
  {
    section: 1,
    title: "Observables, Actions, and Reactions",
    examples: [
      {
        title: "Create Observables",
        path: "/create-observable",
        component: CreateObservableExample
      },
      {
        title: "Box Observables",
        path: "/box-observable",
        component: BoxObservableExample
      },
      {
        title: "Array Observables",
        path: "/array-observable",
        component: ArrayObservableExample
      },
      {
        title: "Map Observables",
        path: "/map-observable",
        component: MapObservableExample
      },
      {
        title: "Computed Observables",
        path: "/computed-observable",
        component: ComputedObservableExample
      },
      {
        title: "Basic Actions",
        path: "/basic-action",
        component: BasicActionExample
      },
      {
        title: "Enforce Actions",
        path: "/enforce-action",
        component: EnforceActionExample
      },
      {
        title: "Decorator Actions",
        path: "/decorators-action",
        component: EnforceActionExample
      },
      {
        title: "Autorun Reactions",
        path: "/autorun-reaction",
        component: AutorunReactionExample
      },
      {
        title: "Reaction Reaction",
        path: "/reaction-reaction",
        component: ReactionExample
      },
      {
        title: "When Reaction",
        path: "/when-reaction",
        component: WhenReactionExample
      }
    ]
  },
  {
    section: 2,
    title: "React Mobx Example",
    examples: [
      {
        title: "Book Search",
        path: "/",
        component: BookSearchApp
      }
    ]
  }
]);

export const allExamples = sections.reduce((list, s) => {
  return list.concat(s.examples);
}, []);

function applyPathPrefix(sections) {
  return sections.map(s => {
    s.examples.forEach(ex => {
      const exPath = ex.path.replace(/^\/+/, "");
      Object.assign(ex, {
        path: `/section-0${s.section}/${exPath}`,
        sectionIndex: s.section,
        sectionTitle: s.title
      });
    });
    return s;
  });
}
