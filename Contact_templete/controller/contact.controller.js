import express from "express";
import mongoose from "mongoose";
import Contact from "../models/contacts.models.js";

export const home = async (req, res) => {
  const contacts = await Contact.find();
  //   res.json(contacts)
  res.render("allContact", { contacts });
};

export const show_contact = async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params.id });
  res.render("show_contact", { contact });
};

export const add_contact = (req, res) => {
  res.render("add_contact");
};

export const add_contact_data = async (req, res) => {
  await Contact.create(req.body);  //if form fields name  and database collection field name are same then use req.body other wise below code use where database collection field : req.body.form field name
//   await Contact.insertOne({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address,
//   });
  res.redirect("/");
//    res.send(req.body)
};

export const update_contact = async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params.id });
  res.render("update_contact", { contact });
};

export const update_contact_data = async (req, res) => {
  // const {first_name,last_name,email,phone,address} = req.body   use when names are different in database and form feild {database collection field at sequence me jaisa req.body me json return ho rha hai}
  // await Contact.findByIdAndUpdate(req.params.id , {first_name,last_name,email,phone,address});
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  // res.send(req.body);
  res.redirect("/");
};

export const delete_contact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
