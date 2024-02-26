import { devs, students } from "../db.js";

export const resolvers = {
  Query: {
    developers() {
      return devs;
    },

    developer(parent, args, context) {
      return devs.find((data) => data.id == args.id);
    },

    students() {
      return students;
    },
  },
};
