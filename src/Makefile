all: codesend
	
codesend: RCSwitch.o codesend.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o ../build/$@ -lwiringPi
	
clean:
	$(RM) *.o codesend