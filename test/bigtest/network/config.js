// typical mirage config export
export default function config() {
  this.get('/service-points', function (schema) {
    return schema.servicePoints.all();
  });

  this.put('/service-points/:id', ({ servicePoints }, request) => {
    const body = JSON.parse(request.requestBody);
    const { staffSlips } = body;
    const servicePoint = servicePoints.find(body.id);
    servicePoint.update({ staffSlips });
    return servicePoint.attrs;
  });

  this.get('/staff-slips-storage/staff-slips', ({ staffSlips }) => {
    return staffSlips.all();
  });

  this.get('/users', ({ users }) => {
    return users.all();
  });

  this.get('/location-units/institutions', ({ institutions }) => {
    return institutions.all();
  });

  this.get('/location-units/campuses', ({ campus }) => {
    return campus.all();
  });

  this.get('/location-units/libraries', ({ libraries }) => {
    return libraries.all();
  });

  this.get('/locations', ({ locations }) => {
    return locations.all();
  });

  this.get('/configurations/entries', (_, { queryParams }) => {
    if (queryParams && queryParams.query === '(module=TENANT and configName=addresses)') {
      return {
        configs: [{
          id: '7c7c5a09-d465-4642-889a-8a0b351d7b15',
          module: 'TENANT',
          configName: 'order.closing-reasons',
          enabled: true,
          value: '{}',
          code: 'ADDRESS_1',
        }],
      };
    }

    return { configs: [] };
  });
}
