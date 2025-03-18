INSERT INTO dbo.Student Values('A1000',N'Nguyễn Xuân Bình',2000,'Male','Ha Noi')
INSERT INTO dbo.Student Values('A1001',N'Nguyễn Xuân Bình',2000,'Male','Ha Noi')
INSERT INTO dbo.Student Values('A1002',N'Trần Thị Lý',2002,'Fem','Ha Noi')
INSERT INTO dbo.Student Values('A1003',N'Bùi Thị Thảo',2000,'Fem','Ha Noi')

INSERT INTO dbo.Class VALUES('T2410E','T2410E',20)
INSERT INTO dbo.Class VALUES('T2502E','T2502E',20)

INSERT INTO dbo.Subject VALUES('BMW','Building Model Web',10000,30,'Web Fontend')
INSERT INTO dbo.Subject VALUES('FWDR','ReactJS',10000,30,'Web Fontend')
INSERT INTO dbo.Subject VALUES('DMS','Database Model',10000,30,'Database')

INSERT INTO dbo.StudentSubject VALUES('A1000','BMW')
INSERT INTO dbo.StudentSubject VALUES('A1000','FWDR')
INSERT INTO dbo.StudentSubject VALUES('A1000','DMS')
INSERT INTO dbo.StudentSubject VALUES('A1001','BMW')


SELECT * FROM dbo.Subject;
SELECT * FROM dbo.StudentSubject;
SELECT * FROM dbo.Class;
SELECT * FROM dbo.Student;


-- DELETE dbo.Student WHERE StudentId ='A1002'

-- DELETE dbo.Student
-- SELECT SubjectId,SubjectName FROM.dbo.Subject WHERE SubjectId ='FWDR';
-- GO
-- UPDATE dbo.Subject SET SubjectName =N'Front end web develop reactjs'; -- WHERE SubjectId ='FWDR'

-- Delete dbo.Subject


-- UPDATE dbo.Subject SET SubjectName =N'Building Model Web' WHERE SubjectId ='BMW';
-- UPDATE dbo.Subject SET SubjectName =N'Database Model' WHERE SubjectId ='DMS';
-- UPDATE dbo.Subject SET SubjectName =N'Front end web develop reactjs';


-- -- Where với 2 điều kiện
-- SELECT * FROM dbo.Student WHERE [Year] >=2000 AND Sex ='Male'

-- Lấy thông tin của sinh viên có mã sinh viên : A1000 đồng thời là thông tin môn học của sinh viên đó

SELECT
A.StudentId,
A.StudentName,
A.Sex,
A.[Year],
B.SubjectId
 FROM dbo.Student A LEFT JOIN StudentSubject B ON A.StudentId = B.StudentId WHERE A.StudentId ='A1000'


 SELECT
A.StudentId,
A.StudentName,
A.Sex,
A.[Year],
B.SubjectId
 FROM dbo.Student A RIGHT JOIN StudentSubject B ON A.StudentId = B.StudentId WHERE A.StudentId ='A1000'


SELECT
C.SubjectName,
C.[Hours],
C.Fee,
C.[Description],
B.StudentName,
B.Sex
 FROM StudentSubject A LEFT JOIN Student B ON A.StudentId = B.StudentId
                        LEFT JOIN dbo.Subject C ON A.SubjectId = C.SubjectId WHERE A.StudentId ='A1000'



UPDATE dbo.Subject SET [Hours] = 15 WHERE SubjectId ='FWDR'


-- Store Procedure
Alter PROCEDURE GETINFO_STUDENT(
    @StudentId CHAR(10)
)
AS
BEGIN
    SELECT
    C.SubjectName,
    C.[Hours],
    C.Fee,
    C.[Description],
    B.StudentName,
    B.Sex
    FROM StudentSubject A LEFT JOIN Student B ON A.StudentId = B.StudentId
                            LEFT JOIN dbo.Subject C ON A.SubjectId = C.SubjectId WHERE A.StudentId =@StudentId
END;

EXEC GETINFO_STUDENT 'A1000'


EXEC GETINFO_STUDENT 'A1001'

EXEC GETINFO_STUDENT 'A1002'