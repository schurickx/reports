export const authorsToOptions = authorList =>
  authorList.map(({ name, id }) => ({
    label: name,
    value: id
  }));

export const outsecrecyToOptions = list => {
  return list.map(({ name, id }) => ({
    label: name,
    value: id
  }));
};

export const optionsToAuthors = options =>
  options
    ? options.map(({ value, label }) => ({
        id: value,
        name: label
      }))
    : [];

export const publishersToOptions = publishersList =>
  publishersList.map(({ name, id }) => ({
    label: name,
    value: id
  }));

export const optionsToPublishers = options =>
  options
    ? options.map(({ value, label }) => ({
        id: value,
        name: label
      }))
    : [];

export const institutionsToOptions = institutionsList =>
  institutionsList.map(({ name, idclient, id }) => ({
    label: name,
    value: id || idclient
  }));

export const institutionToOption = institution => ({
  label: institution.name,
  value: institution.idclient
});

export const optionsToInstitutions = options =>
  options
    ? options.map(({ value, label }) => ({
        id: value,
        name: label
      }))
    : [];
