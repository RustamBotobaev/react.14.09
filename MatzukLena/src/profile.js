export const getFullName = ({ profile }) => {
    const { name, lastName } = profile;
    return `${name} ${lastName}`;
};