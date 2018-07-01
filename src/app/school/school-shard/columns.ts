import {
	Column
} from '../../shard'

export const departmentColumns: Column[] = [
	{ name: 'department_id'					, label: 'ID Jur.'				, hidden: true },
	{ name: 'departmentCode'				, label: 'Kode Jur.'			, hidden: true },
	{ name: 'departmentName'				, label: 'Jurusan'				, hidden: false },
	{ name: 'departmentCreatedAt'			, label: 'Jur. Dibuat pada'		, hidden: true },
	{ name: 'departmentUpdatedAt'			, label: 'Jur. Diubah pada'		, hidden: true },
]

export const classColumns: Column[] = [
	{ name: 'class_id'						, label: 'ID'					, hidden: true },
	{ name: 'classCode'						, label: 'Kode Kelas'			, hidden: true },
	{ name: 'className'						, label: 'Kelas'				, hidden: false },
	{ name: 'classCreatedAt'				, label: 'Dibuat pada'			, hidden: true },
	{ name: 'classUpdatedAt'				, label: 'Diubah pada'			, hidden: true },

	...departmentColumns,

	// { name: 'homeroomTeacher_id'			, label: 'ID'				, hidden: true },
	{ name: 'homeroomTeacherNIM'			, label: 'NIP WK.'				, hidden: false },
	// { name: 'homeroomTeacherBirthDate'		, label: 'Tgl. Lahir'			, hidden: true },
	{ name: 'homeroomTeacherName'			, label: 'Nama WK.'				, hidden: false },
	// { name: 'homeroomTeacherParent'			, label: 'Orang Tua'		, hidden: true },
	{ name: 'homeroomTeacherTelp'			, label: 'No. Telp. WK.'		, hidden: false },
	{ name: 'homeroomTeacherAddress'		, label: 'Alamat WK.'			, hidden: true },
	// { name: 'homeroomTeacherPassword'		, label: 'Password'			, hidden: true },
	// { name: 'homeroomTeacherUsername'		, label: 'WK. Username'			, hidden: true },
	// { name: 'homeroomTeacherCreatedAt'		, label: 'WK. Dibuat pada'		, hidden: true },
	// { name: 'homeroomTeacherUpdatedAt'		, label: 'WK. Diubah pada'		, hidden: true },
]

export const curriculumColumns: Column[] = [
	{ name: 'curriculum_id'					, label: 'ID'					, hidden: false },
	// { name: 'curriculumBirthDate'			, label: 'Tgl. Lahir'			, hidden: true },
	// { name: 'curriculumNIM'					, label: 'NIP'					, hidden: false },
	{ name: 'curriculumName'				, label: 'Nama'					, hidden: false },
	// { name: 'curriculumParent'				, label: 'Orang Tua'			, hidden: true },
	// { name: 'curriculumPassword'			, label: 'Password'				, hidden: true },
	{ name: 'curriculumTelp'				, label: 'No. Telp.'			, hidden: false },
	// { name: 'curriculumUsername'			, label: 'Username'				, hidden: true },
	{ name: 'curriculumAddress'				, label: 'Alamat'				, hidden: true },
	// { name: 'curriculumCreatedAt'			, label: 'Dibuat pada'			, hidden: true },
	// { name: 'curriculumUpdatedAt'			, label: 'Diubah pada'			, hidden: true },
]

export const studentColumns: Column[] = [
	{ name: 'student_id'					, label: 'ID Murid'				, hidden: false },
	{ name: 'studentNIM'					, label: 'NIS'					, hidden: false },
	{ name: 'studentName'					, label: 'Nama'					, hidden: false },
	{ name: 'studentBirthDate'				, label: 'Tgl. Lahir'			, hidden: true },
	{ name: 'studentParent'					, label: 'Orang Tua'			, hidden: true },
	{ name: 'studentAddress'				, label: 'Alamat'				, hidden: true },
	// { name: 'studentPassword'				, label: 'Mrd. Password'		, hidden: true },
	// { name: 'studentTelp'					, label: 'Mrd. No. Telp.'		, hidden: false },
	// { name: 'studentUsername'				, label: 'Username'				, hidden: true },
	{ name: 'studentCreatedAt'				, label: 'Murid Dibuat pada'	, hidden: true },
	// { name: 'studentUpdatedAt'				, label: 'Diubah pada'			, hidden: true },
]

export const scoreColumns: Column[] = [
	{ name: 'score_id'						, label: 'ID'					, hidden: false },
	{ name: 'scoreCode'						, label: 'Kode'					, hidden: true },
	// ...studentColumns,
	{ name: 'scoreTask'						, label: 'Tugas'				, hidden: false },
	{ name: 'scoreUTS'						, label: 'UTS'					, hidden: false },
	{ name: 'scoreUAS'						, label: 'UAS'					, hidden: false },
	{ name: 'scoreFinal'					, label: 'Akhir'				, hidden: false },
	{ name: 'scoreDescription'				, label: 'Deskripsi'			, hidden: true },
	{ name: 'scoreCreatedAt'				, label: 'Nilai Dibuat pada'	, hidden: true },
	// { name: 'scoreUpdatedAt'				, label: 'Updated at'			, hidden: true },
]

export const scoreWStudentColumns: Column[] = [
	...scoreColumns,
	...studentColumns,
]

export const subjectColumns: Column[] = [
	{ name: 'subject_id'					, label: 'ID Mapel'				, hidden: true },
	{ name: 'subjectCode'					, label: 'Kode Mapel'			, hidden: true },
	{ name: 'subjectName'					, label: 'Mapel'			, hidden: false },
	{ name: 'subjectCreatedAt'				, label: 'Mapel Dibuat pada'	, hidden: true },
	// { name: 'subjectCupdatedAt'				, label: 'Updated at'			, hidden: true },
]

export const teacherColumns: Column[] = [
	{ name: 'teacher_id'					, label: 'ID'					, hidden: false },
	// { name: 'teacherBirthDate'				, label: 'Tgl. Lahir'			, hidden: true },
	{ name: 'teacherNIM'					, label: 'NIP'					, hidden: false },
	{ name: 'teacherName'					, label: 'Nama'					, hidden: false },
	// { name: 'teacherParent'					, label: 'Orang Tua'			, hidden: true },
	// { name: 'teacherPassword'				, label: 'Password'				, hidden: true },
	{ name: 'teacherTelp'					, label: 'No. Telp.'			, hidden: false },
	// { name: 'teacherUsername'				, label: 'Username'				, hidden: true },
	{ name: 'teacherAddress'				, label: 'Alamat'				, hidden: true },
	{ name: 'teacherCreatedAt'				, label: 'Dibuat pada'			, hidden: true },
	// { name: 'teacherUpdatedAt'				, label: 'Diubah pada'			, hidden: true },
]

export const teacherAssignmentColumns: Column[] = [
	{ name: 'teacherAssignment_id'			, label: 'ID'					, hidden: false },
	{ name: 'teacherAssignmentCode'			, label: 'Kode'					, hidden: true },
	{ name: 'teacherAssignmentTeacher_id'	, label: 'ID Guru'				, hidden: true },
	{ name: 'teacherAssignmentClass_id'		, label: 'ID Kelas'				, hidden: true },
	{ name: 'teacherAssignmentSubject_id'	, label: 'ID Mapel'				, hidden: true },
	{ name: 'teacherAssignmentHour'			, label: 'Jam'					, hidden: false },
	{ name: 'teacherAssignmentDay'			, label: 'Hari'					, hidden: false },
	{ name: 'teacherAssignmentSemester'		, label: 'Semester'				, hidden: false },
	{ name: 'teacherAssignmentPeriode'		, label: 'Periode'				, hidden: false },
	{ name: 'teacherAssignmentStatus'		, label: 'Status'				, hidden: false },
	{ name: 'teacherAssignmentCreatedAt'	, label: 'Dibuat pada'			, hidden: true },
	// { name: 'teacherAssignmentUpdatedAt'	, label: 'Diubah pada'			, hidden: true },

	...teacherColumns,

	...classColumns,

	...subjectColumns,
]

export const classStudentColumns: Column[] = [
	{ name: 'classWStudent_id'			, label: 'ID'						, hidden: true },
	{ name: 'classWStudentCreatedAt'	, label: 'Kls. Dibuat pada'			, hidden: true },
	// { name: 'classWStudentUpdatedAt'	, label: 'Diubah pada'				, hidden: true },

	...studentColumns,
]

export const scoreWTeacherAssignmentColumns: Column[] = [
	{ name: 'score_id'						, label: 'ID'					, hidden: true },
	{ name: 'scoreCode'						, label: 'Kode'					, hidden: true },
	// #############################################################################################
	...teacherAssignmentColumns,
	// #############################################################################################
	{ name: 'scoreTask'						, label: 'Tugas'				, hidden: false },
	{ name: 'scoreUTS'						, label: 'UTS'					, hidden: false },
	{ name: 'scoreUAS'						, label: 'UAS'					, hidden: false },
	{ name: 'scoreFinal'					, label: 'Akhir'				, hidden: false },
	{ name: 'scoreDescription'				, label: 'Deskripsi'			, hidden: true },
	{ name: 'scoreCreatedAt'				, label: 'Nilai Dibuat pada'	, hidden: true },
]
