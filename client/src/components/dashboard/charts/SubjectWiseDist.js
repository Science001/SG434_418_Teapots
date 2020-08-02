import React from "react";
import { connect } from "react-redux";

import SubjectWiseDistribution from "./SubjectWiseDistribution";
import SubjectWisePass from "./SubjectWisePass";

const mapStateToProps = (state) => {
  return {
    subjectSelected: state.report.subjectSelected,
    subjectWisePass: state.report.subjectWisePass,
    subjectWise: state.report.subjectWise,
  };
};

const SubjectWiseDist = ({ subjectWise, subjectSelected, subjectWisePass }) => {
  return (
    <div>
      {subjectSelected === null ? (
        <SubjectWiseDistribution />
      ) : (
        <SubjectWisePass
          subjectWise={subjectWise.filter((s) => s.name === subjectSelected)}
          data={subjectWisePass}
          subject={subjectSelected}
        />
      )}
    </div>
  );
};

export default connect(mapStateToProps)(SubjectWiseDist);
