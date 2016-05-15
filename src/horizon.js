export const createHorizon = window.Horizon;

// Connect to horizon
export const horizon = createHorizon();
export const companyCollection = horizon('companies');
export const jobCollection = horizon('jobs');


horizon('companies').fetch().forEach(x => companyCollection.remove(x.id));
horizon('jobs').fetch().forEach(x => companyCollection.remove(x.id));

setInterval(() => {
  companyCollection.store({
    name: `Sighten ${Math.random()}`,
    industry: 'Solar',
  }).forEach((id) => {
    new Array(Math.floor(10 * Math.random())).fill().forEach((x, i) => {
      jobCollection.store({
        title: `some Cooool job ${i}`,
        description: `You will make so many dollars! This many: ${100 * Math.random()}`,
        company_id: id,
      });
    });
  });
}, 1000 * Math.random());

setInterval(() => {
  companyCollection.limit(1).fetch().forEach(toBeReaped => {
    if (toBeReaped) {
      companyCollection.remove(toBeReaped.id);
      jobCollection
        .findAll({ company_id: toBeReaped.id }).fetch()
        .forEach(x => jobCollection.remove(x));
    }
  });
}, 2000 * Math.random());
