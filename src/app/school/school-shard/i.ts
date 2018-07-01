export interface Member {
	_id				?: string
	address			?: string
	birthDate		?: Date | string
	name			?: string
	NIM				?: string
	parent			?: string
	password		?: string
	telp			?: string
	username		?: string
	createdAt		?: string
	updatedAt		?: string
}
export interface Admin {
	admin_id			?: string
	adminAddress		?: string
	adminBirthDate		?: Date | string
	adminName			?: string
	adminNIM			?: string
	adminParent			?: string
	adminPassword		?: string
	adminTelp			?: string
	adminUsername		?: string
	adminCreatedAt		?: string
	adminUpdatedAt		?: string
}
export interface Class {
	class_id				?: string
	classCode				?: string
	className				?: string
	classDepartment_id		?: string
	classHomeroomTeacher_id	?: string
	classCreatedAt			?: string
	classUpdatedAt			?: string
}

export interface ClassV
	extends Class, Department, HomeroomTeacher {}

export interface ClassWStudent {
	classWStudent_id		?: string
	classWStudentClass_id	?: string
	classWStudentStudent_id	?: string
	classWStudentCreatedAt	?: string
	classWStudentUpdatedAt	?: string
}

export interface StudentInClassV
	extends ClassWStudent, Student {}

export interface ClassWStudentV
	extends StudentInClassV, ClassV {}

export interface Curriculum {
	curriculum_id		?: string
	curriculumAddress	?: string
	curriculumBirthDate	?: string
	curriculumNIM		?: string
	curriculumName		?: string
	curriculumParent	?: string
	curriculumPassword	?: string
	curriculumTelp		?: string
	curriculumUsername	?: string
	curriculumCreatedAt	?: string
	curriculumUpdatedAt	?: string
}

export interface Department {
	department_id		?: string
	departmentCode		?: string
	departmentName		?: string
	departmentCreatedAt	?: string
	departmentUpdatedAt	?: string
}

export interface Score {
	score_id					?: string
	scoreTeacherAssignment_id	?: string
	scoreStudent_id				?: string
	scoreCode					?: string
	scoreTask					?: string
	scoreUTS					?: string
	scoreUAS					?: string
	scoreFinal					?: string
	scoreDescription			?: string
	scoreCreatedAt				?: string
	scoreUpdatedAt				?: string
}

export interface StudentInScoreV
	extends Score, Student {}

export interface ScoreV
	extends StudentInScoreV, TeacherAssignment, Teacher,
	Class, Department, HomeroomTeacher, Subject {}

export interface StudentNotInScoreV extends Student {
	teacherAssignment_id		?: string
	class_id					?: string
}

export interface Student {
	student_id			?: string
	studentAddress		?: string
	studentBirthDate	?: Date | string
	studentName			?: string
	studentNIM			?: string
	studentParent		?: string
	studentTelp			?: string
	studentPassword		?: string
	studentUsername		?: string
	studentCreatedAt	?: string
	studentUpdatedAt	?: string
}

export interface StudentInTeacherAssignmentV extends Student {
	class_id			?: string
	teacherAssgnment_id	?: string
}

export interface StudentNotInClass extends Student {}

export interface Subject {
	subject_id			?: string
	subjectCode			?: string
	subjectName			?: string
	subjectCreatedAt	?: string
	subjectUpdatedAt	?: string
}

export interface Teacher {
	teacher_id			?: string
	teacherAddress		?: string
	teacherBirthDate	?: Date | string
	teacherName			?: string
	teacherNIM			?: string
	teacherParent		?: string
	teacherPassword		?: string
	teacherTelp			?: string
	teacherUsername		?: string
	teacherCreatedAt	?: string
	teacherUpdatedAt	?: string
}

export interface HomeroomTeacher {
	homeroomTeacher_id			?: string
	homeroomTeacherAddress		?: string
	homeroomTeacherBirthDate	?: string
	homeroomTeacherName			?: string
	homeroomTeacherNIM			?: string
	homeroomTeacherParent		?: string
	homeroomTeacherPassword		?: string
	homeroomTeacherTelp			?: string
	homeroomTeacherUsername		?: string
	homeroomTeacherCreatedAt	?: string
	homeroomTeacherUpdatedAt	?: string
}

export interface TeacherAssignment {
	teacherAssignment_id		?: string
	teacherAssignmentCode		?: string
	teacherAssignmentTeacher_id	?: string
	teacherAssignmentClass_id	?: string
	teacherAssignmentSubject_id	?: string
	teacherAssignmentHour		?: string
	teacherAssignmentDay		?: string
	teacherAssignmentSemester	?: string
	teacherAssignmentPeriode	?: string
	teacherAssignmentStatus	?: string
	teacherAssignmentCreatedAt	?: string
	teacherAssignmentUpdatedAt	?: string
}

export interface TeacherAssignmentV
	extends TeacherAssignment, Teacher, Class,
	Department, HomeroomTeacher, Subject {}

export interface TeacherAssignmentWStudentV
	extends TeacherAssignmentV, Student {}
