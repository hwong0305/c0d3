import gql from 'graphql-tag';

export const LESSON_STATUS = gql`
  query lessonStatus($in: LessonId) {
    lessonStatus(input: $in) {
      userId
      lessonId
      isPassed
      isTeaching
      isEnrolled
      starGiven {
        id
        username
      }
    }
  }
`;

export const USERS = gql`
  query users($in: UserInput) {
    users(input: $in) {
      username
    }
  }
`;

export const ENROLL_STUDENT = gql`
  mutation enrollStudent($in: LessonId) {
    enrollStudent(input: $in) {
      isTeaching
      isPassed
      isEnrolled
    }
  }
`;

export const GIVE_STAR = gql`
  mutation giveStar($in: LessonUserId) {
    giveStar(input: $in)
  }
`;

export const LESSON_INFO = gql`
  query lessonInfo($in: LessonId) {
    lessonInfo(input: $in) {
      id
      description
      docUrl
      githubUrl
      videoUrl
      order
      title
      challenges {
        id
        description
        order
        title
      }
      users {
        id
        username
        userLesson {
          isPassed
          isTeaching
          isEnrolled
        }
      }
    }
  }
`;

export const TEACHERS = gql`
  query teachers($in: LessonId) {
    teachers(input: $in) {
      id
      username
    }
  }
`;

export const STAR_RECIPIENT = gql`
  {
    starRecipent @client
  }
`;
export const STUDENT_CHALLENGE_DATA = gql`
  {
    mrUrl @client
  }
`;

export const CHALLENGE_INDEX = gql`
  {
    challengeIndex @client
  }
`;

export const ADMIN_STATE = gql`
  {
    lessonIndex @client
    addNew @client
    componentType @client
  }
`;

export const ADOPTED_STUDENT_FILTER = gql`
  {
    adoptedStudentFilter @client
    mrFilter @client
  }
`;

export const STUDENTS = gql`
  query student($in: LessonId) {
    students(input: $in) {
      id
      username
      userLesson {
        isPassed
        isTeaching
        isEnrolled
      }
    }
  }
`;

export const CHALLENGE_STATUS = gql`
  query challengeStatus($in: ChallengeId) {
    challengeStatus(input: $in) {
      status
      mrUrl
      viewCount
      userId
      lessonId
      challengeId
      diff
      comment
      reviewer {
        id
        username
      }
      user {
        id
      }
      reviewerId
    }
  }
`;

export const LESSONS = gql`
  {
    lessons {
      id
      description
      docUrl
      githubUrl
      videoUrl
      title
      order
      challenges {
        id
        description
        title
        order
      }
      users {
        id
        username
      }
    }
  }
`;

export const RECEIVED_STARS = gql`
  query receivedStars($in: UserInput) {
    receivedStars(input: $in) {
      lessonId
      student {
        username
      }
    }
  }
`;

export const CURRICULUM_STATUS = gql`
  {
    curriculumStatus {
      id
      description
      title
      order
      currentUser {
        userLesson {
          isEnrolled
          isTeaching
          isPassed
        }
      }
    }
  }
`;

export const SUBMISSIONS = gql`
  query submissions($in: LessonId, $where: SubmissionWhere) {
    submissions(input: $in, where: $where) {
      id
      status
      mrUrl
      diff
      comment
      viewCount
      user {
        username
        id
      }
      challenge {
        title
        id
      }
      createdAt
      updatedAt
    }
  }
`;

export const USER_SUBMISSIONS = gql`
  query userSubmissions($in: LessonUserId) {
    userSubmissions(input: $in) {
      status
      mrUrl
      diff
      viewCount
      comment
      reviewer {
        username
        id
      }
      challenge {
        title
        id
      }
    }
  }
`;

export const VIEW_SUBMISSION = gql`
  mutation viewSubmission($in: SubmissionEdit) {
    viewSubmission(input: $in) {
      viewCount
    }
  }
`;

export const APPROVE_SUBMISSION = gql`
  mutation approveSubmission($in: SubmissionEdit) {
    approveSubmission(input: $in) {
      id
    }
  }
`;

export const MAKE_TEACHER = gql`
  mutation makeTeacher($in: LessonId) {
    makeTeacher(input: $in)
  }
`;

export const UN_MAKE_TEACHER = gql`
  mutation unMakeTeacher($in: LessonId) {
    unMakeTeacher(input: $in)
  }
`;

export const UNAPPROVE_SUBMISSION = gql`
  mutation unapproveSubmission($in: SubmissionEdit) {
    unapproveSubmission(input: $in) {
      id
    }
  }
`;

export const REJECT_SUBMISSION = gql`
  mutation rejectSubmission($in: SubmissionEdit) {
    rejectSubmission(input: $in) {
      id
    }
  }
`;

export const CREATE_SUBMISSION = gql`
  mutation createSubmission($in: SubmissionInput) {
    createSubmission(input: $in) {
      id
    }
  }
`;

export const ADOPT_STUDENT = gql`
  mutation adoptStudent($input: LessonUserId) {
    adoptStudent(input: $input)
  }
`;

export const UNADOPT_STUDENT = gql`
  mutation unAdoptStudent($input: LessonUserId) {
    unAdoptStudent(input: $input)
  }
`;

export const SAVE_LESSON = gql`
  mutation saveLesson($input: LessonInput) {
    saveLesson(input: $input) {
      id
      description
      docUrl
      githubUrl
      videoUrl
      order
      title
    }
  }
`;

export const CREATE_LESSON = gql`
  mutation createLesson($input: LessonInput) {
    createLesson(input: $input) {
      id
      description
      docUrl
      githubUrl
      videoUrl
      order
      title
    }
  }
`;

export const SAVE_CHALLENGE = gql`
  mutation saveChallenge($input: ChallengeInput) {
    saveChallenge(input: $input) {
      id
      lessonId
      title
      description
      order
    }
  }
`;

export const CREATE_CHALLENGE = gql`
  mutation createChallenge($input: ChallengeInput) {
    createChallenge(input: $input) {
      id
      lessonId
      title
      description
      order
    }
  }
`;

export const DELETE_LESSON = gql`
  mutation deleteLesson($input: LessonId) {
    deleteLesson(input: $input)
  }
`;

export const DELETE_CHALLENGE = gql`
  mutation deleteChallenge($input: ChallengeId) {
    deleteChallenge(input: $input)
  }
`;