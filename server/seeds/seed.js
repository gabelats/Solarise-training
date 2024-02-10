const db = require("../config/connection");
const { Admin, Employee, Video } = require("../models");
const adminSeeds = require("./adminSeeds.json");
const videoSeeds = require("./videoSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Admin", "admin");

    await cleanDB("Video", "video");

    await cleanDB("Employee", "employee");

    await Admin.create(adminSeeds);

    await Video.create(videoSeeds);

    // for (let i = 0; i < videoSeeds.length; i++) {
    //   const { _id, videoView } = await Video.create(videoSeeds[i]);
    //   const employee = await Employee.findOneAndUpdate(
    //     { username: videoView },
    //     {
    //       $addToSet: {
    //         video: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("You are Seeded!");
  process.exit(0);
});
