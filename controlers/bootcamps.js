const express = require('express');

// @desk get all bootcams
// @route    GET api/v1/bootcamps
// @access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desk    Create new bootcamp
// @route    GET api/v1/bootcamps/id
// @access   Public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create bootcamps' });
};

// @desk     Update bootcamp
// @route    POST api/v1/bootcamps
// @access   Public
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamps ${req.params.id}` });
};

// @desk     Delete bootcamp
// @route    POST api/v1/bootcamps
// @access   Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
};
