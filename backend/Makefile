gen-song:
	@protoc \
		-I ./proto \
		--plugin=./node_modules/.bin/protoc-gen-ts_proto \
		--ts_proto_out=./libs/common/src/types \
		--ts_proto_opt=nestJs=true,outputFilePattern=*.ts \
		./proto/song.proto