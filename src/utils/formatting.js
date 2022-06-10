export const formateName = (userObj) => {
  const { firstName, lastName, username } = userObj;
  if (firstName && lastName) {
    return firstName + " " + lastName;
  } else if (firstName) {
    return firstName;
  }
  return username;
};

export const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const stringAvatar = (name) => {
  const n = name.split(" ");
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: n.length <= 1 ? n[0].slice(0, 2) : `${n[0][0]}${n[1][0]}`,
  };
};
