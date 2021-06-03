import React from "react";
import "./Kennel.css";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const Kennel = () => (
  <>
    <h2>Val's Kennels</h2>
    <small>I'll watch your dogs and I'll do it good, too!</small>
    <NavBar />
    <ApplicationViews />
  </>
);
