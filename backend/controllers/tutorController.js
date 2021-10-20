import asyncHandler from "express-async-handler";
import Tutor from "./../models/tutorModel.js";

const createTutor = asyncHandler(async (req, res) => {
  const {
    user,
    basic,
    academic,
    exQualification,
    woExperience,
    weeklyTime,
    subjectTeaches,
    teachesAndFess,
    lessonInclude,
    exActivities,
    aboutMe,
    DocumentUpload,
    VideoUpload,
  } = req.body;

  const tutor = await Tutor.create({
    user,
    basic,
    academic,
    exQualification,
    woExperience,
    weeklyTime,
    subjectTeaches,
    teachesAndFess,
    lessonInclude,
    exActivities,
    aboutMe,
    DocumentUpload,
    VideoUpload,
  });

  if (tutor) {
    res.status(201).json({
      user: tutor.user,
      basic: tutor.basic,
      academic: tutor.academic,
      exQualification: tutor.exQualification,
      woExperience: tutor.woExperience,
      weeklyTime: tutor.weeklyTime,
      subjectTeaches: tutor.subjectTeaches,
      teachesAndFess: tutor.teachesAndFess,
      lessonInclude: tutor.lessonInclude,
      exActivities: tutor.exActivities,
      aboutMe: tutor.aboutMe,
      DocumentUpload: tutor.DocumentUpload,
      VideoUpload: tutor.VideoUpload,
    });
  } else {
    res.status(400);
    throw new Error("Unable to submit the form");
  }
});

const getTutorProfile = asyncHandler(async (req, res) => {
  const tutor = await Tutor.findOne({ user: req.params.id });

  if (tutor) {
    res.send({
      user: tutor.user,
      basic: tutor.basic,
      academic: tutor.academic,
      exQualification: tutor.exQualification,
      woExperience: tutor.woExperience,
      weeklyTime: tutor.weeklyTime,
      subjectTeaches: tutor.subjectTeaches,
      teachesAndFess: tutor.teachesAndFess,
      lessonInclude: tutor.lessonInclude,
      exActivities: tutor.exActivities,
      aboutMe: tutor.aboutMe,
      DocumentUpload: tutor.DocumentUpload,
      VideoUpload: tutor.VideoUpload,
    });
  } else {
    res.status(404);
    throw new Error("Unable to get tutor");
  }
});

const editTutor = asyncHandler(async (req, res) => {
  const tutor = await Tutor.findOne({ user: req.params.id });

  if (tutor) {
    tutor.user = req.body.id || tutor.id;
    tutor.basic = req.body.basic || tutor.basic;
    tutor.academic = req.body.academic || tutor.academic;
    tutor.exQualification = req.body.exQualification || tutor.exQualification;
    tutor.woExperience = req.body.woExperience || tutor.woExperience;
    tutor.weeklyTime = req.body.weeklyTime || tutor.weeklyTime;
    tutor.subjectTeaches = req.body.subjectTeaches || tutor.subjectTeaches;
    tutor.teachesAndFess = req.body.teachesAndFess || tutor.teachesAndFess;
    tutor.lessonInclude = req.body.lessonInclude || tutor.lessonInclude;
    tutor.exActivities = req.body.exActivities || tutor.exActivities;
    tutor.aboutMe = req.body.aboutMe || tutor.aboutMe;
    tutor.DocumentUpload = req.body.DocumentUpload || tutor.DocumentUpload;
    tutor.VideoUpload = req.body.VideoUpload || tutor.VideoUpload;

    const updatedUser = await tutor.save();

    res.json({
      updatedUser,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { createTutor, editTutor, getTutorProfile };
