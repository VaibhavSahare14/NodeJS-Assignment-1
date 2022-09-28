const fs = require('fs/promises')

/*--------------WRITE---------*/

const myFileWriter = async (fileName, fileContent) => {

	try {
		await fs.writeFile(fileName, fileContent)
		console.log("File is Created");
	} catch (err) {
		console.error(err);
	}
}

/*--------------READ-----------------*/

const myFileReader = async (fileName) => {

	const data = await fs.readFile(fileName, 'utf8');
	console.log(data);
	console.log("File is Readed");
}

/*--------------UPDATE-----------------*/

const myFileUpdater = async (fileName, fileContent) => {

	try {
		await fs.appendFile(fileName, fileContent)
		console.log("File is Updated");
	} catch (err) {
		console.error(err);
	}
}

/*--------------DELETE-----------------*/

const myFileDeleter = async (fileName) => {

	console.log("Entered in Delete Function");

	fs.unlink(fileName, (err) => {
		if (err) throw err;
		console.log("File is deleted");
	});
}

/*--------------CALLING FUNCTIONS-----------------*/

myFileWriter("File-1.txt", "Hello");

myFileWriter("File-2.txt", "Second File");

myFileReader("File-1.txt");       //Reading Before Update/Write File

myFileUpdater("File-1.txt", " World");

myFileReader("File-1.txt");       //Reading After Update File

myFileDeleter("File-2.txt");

/*--------------EXPORTING-----------------*/

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }