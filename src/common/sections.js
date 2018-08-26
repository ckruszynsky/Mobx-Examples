import {
  CreateObservableExample,
  BoxObservableExample,
  ArrayObservableExample,
  MapObservableExample,
  ComputedObservableExample
} from "../sections/section-01";

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
