import React from 'react';
import MemberCard from './MemberCard';
import './MembersPage.css';
import alex from "./alex.jpg"
import chris from "./chris.jpg"
import dell from "./dell.jpg"
import caitlyn from "./caitlyn.jpg"
import bhaskar from "./bhaskar.jpg"
import athena from "./athena-1.jpg"
import andrew from "./andrew.jpg"
import anthony from "./anthony.jpg"

function MembersPage() {
  const members = [
    // Add 17 member objects here with properties: photo, name, title, description
    {photo: alex, name: "Alex Pease", title: "Bass", description: "I’ve been drafting my bio with some other people and ran out of ideas, but I got some pretty funny feedback in the process:..."},
    {photo: chris, name: "Christopher Yuan", title: "Tenor 2", description: "you know the hard part about writing this bio is making it sound interesting and funny like everyone else's and pretending like i'm not the token basic bitch here, so here, have some of my historical quotes of all time:..."},
    {photo: dell, name: "Madlen Jalalyan", title: "Tenor 1", description: "When people find out I’m an English major, they immediately assume I’m an amazing story teller. But I’m so much more than that! ..."},
    {photo: bhaskar, name:"Bhaskar Roverts", title: "Tenor 2", description: " few years ago, I was driving alone on the highway at cruising speed. The road was straight and the sun was hot, and the moment felt right to sing my heart out..."},
    {photo: athena, name: "Athena Liu", title: "Tenor 1", description: "THE PESTO.....!!!!!!!!!!! YAY THE PESTO!!!!!!!!!!!!!! WHEEEEEEEEEEE!!!!!! :3333333 xoxo UwU !!!LOBOTOMIZER BEAM GO!!! ....."}, 
    {photo: andrew, name: "Andrew Tran", title: "Tenor 2", description: "Here are some random book quotes that go hard:..."}
  ];

  return (
    <div className="members-page">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
}