import React, { Component } from 'react';
import StatItem from './StatItem';

export default class TestStats extends Component {
  newStat = () => {
    let result = +localStorage.correctCounter / +localStorage.testAmount * 100;
    let time = "" + new Date();
    let theme = localStorage.testStackName;
    let testStat = {
      'theme': theme,
      'time': time,
      'result': result
    };

    return testStat;
  }
    
  render() {
    let lastTest = this.newStat();
    const profileEntryData = localStorage.currentUser;
    const profile = JSON.parse(localStorage[profileEntryData]);
    if ('stats' in profile) {
      profile.stats.push(lastTest);
      let modifiedProfile = JSON.stringify(profile);
      localStorage.setItem(profileEntryData, modifiedProfile);
    } else {
      profile.stats = [lastTest];
      let modifiedProfile = JSON.stringify(profile);
      localStorage.setItem(profileEntryData, modifiedProfile);
    }
      
    return (
      <StatItem item={profile.stats[profile.stats.length-1]}/>
    )
  }
}